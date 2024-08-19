import React, { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { ContainerLayout } from '../components/Layout'
import { DocumentGrid } from '../components/Card/DocumentGrid'
import { ImageDialog } from '../components/Dialog'
import { useDocuments } from '../hooks/useDocument'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Home: React.FC = () => {
  const { documents, setDocuments, loading, saving, timeSinceLastSave } = useDocuments()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
console.log(documents)
  const handleCardClick = (image: string) => {
    setSelectedImage(image)
  }

  const handleClose = () => {
    setSelectedImage(null)
  }

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    )
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <ContainerLayout>
        <DocumentGrid
          documents={documents}
          moveCard={(dragIndex, hoverIndex) => {
            const updatedDocuments = Array.from(documents)
            const [removed] = updatedDocuments.splice(dragIndex, 1)
            updatedDocuments.splice(hoverIndex, 0, removed)
            setDocuments(updatedDocuments)
          }}
          onCardClick={handleCardClick}
        />
        <ImageDialog open={!!selectedImage} imageSrc={selectedImage!} onClose={handleClose} />

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="fixed"
          bottom="20px"
          right="20px"
        >
          {saving ? (
            <>
              <CircularProgress size={24} />
              <Typography variant="body2" sx={{ marginLeft: '8px' }}>
                Saving...
              </Typography>
            </>
          ) : (
            <Typography variant="body2">
              Last saved {timeSinceLastSave()} seconds ago
            </Typography>
          )}
        </Box>
      </ContainerLayout>
    </DndProvider>
  )
}

export default Home
