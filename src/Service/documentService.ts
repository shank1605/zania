
const DOCUMENTS_KEY = 'documents'

export const DocumentService = {
  initialize: (initialDocuments: any[]) => {
      localStorage.setItem(DOCUMENTS_KEY, JSON.stringify(initialDocuments))
  },

  fetchDocuments: () => {
    const data = localStorage.getItem(DOCUMENTS_KEY)
    return data ? JSON.parse(data) : []
  },

  addDocument: (document: any) => {
    const documents = DocumentService.fetchDocuments()
    documents.push(document)
    localStorage.setItem(DOCUMENTS_KEY, JSON.stringify(documents))
  },

  updateDocuments: (documents: any[]) => {
    localStorage.setItem(DOCUMENTS_KEY, JSON.stringify(documents))
  }
}