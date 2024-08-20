import { http, HttpResponse } from 'msw'

const DOCUMENTS_KEY = 'documents'

const getDocuments = () => {
  const storedData = localStorage.getItem(DOCUMENTS_KEY)
  return storedData ? JSON.parse(storedData) : []
}

const saveDocuments = (documents: any[]) => {
  localStorage.setItem(DOCUMENTS_KEY, JSON.stringify(documents))
}

export const handlers = [
  // Handler for fetching documents
  http.get('/api/documents', () => {
    const documents = getDocuments()
    return HttpResponse.json(documents)
  }),

  // Handler for saving documents
  http.post('/api/documents', ({ request }) => {
    const newDocuments: any = request.body 
    saveDocuments(newDocuments ?? [])
    return HttpResponse.json(newDocuments)
  }),
]
