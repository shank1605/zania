import { useState, useEffect, useCallback } from 'react'

const API_URL = '/api/documents'

export const useDocuments = () => {
  const [documents, setDocuments] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [saving, setSaving] = useState<boolean>(false)
  const [lastSaved, setLastSaved] = useState<number>(Date.now())
  const [hasChanges, setHasChanges] = useState<boolean>(false)

  // Fetch documents from the REST API on component mount
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await fetch(API_URL)
        const data = await response.json()
        setDocuments(data)
      } catch (error) {
      } finally {
        setLoading(false)
      }
    }
    fetchDocuments()
  }, [])

  // Saving documents to the REST API every 5 seconds if there are changes
  useEffect(() => {
    const interval = setInterval(async () => {
      if (hasChanges) {
        setSaving(true)
        try {
          await fetch(API_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(documents),
          })
          setHasChanges(false) // Resetting the change tracker after saving
          setLastSaved(Date.now()) // Updated the last saved timestamp
        } catch (error) {
          console.error('Error saving documents:', error)
        } finally {
          setSaving(false)
        }
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [documents, hasChanges])

  // Updating documents and track changes
  const updateDocuments = useCallback((updatedDocuments: any[]) => {
    setDocuments(updatedDocuments)
    setHasChanges(true)
  }, [])

  // Calculating time since the last save
  const timeSinceLastSave = () => Math.floor((Date.now() - lastSaved) / 1000)

  return { documents, setDocuments: updateDocuments, loading, saving, timeSinceLastSave }
}
