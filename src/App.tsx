import { useEffect } from 'react'
import './App.css'
import Home from './page/Home'
import { DocumentService } from './Service/documentService'
import { data } from './data/data'

const App: React.FC = () => {
  useEffect(() => {
    DocumentService.initialize(data)
  }, [])
  return <Home />
}
export default App
