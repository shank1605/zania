import React from 'react'
import { useDrop } from 'react-dnd'
import { Grid } from '@mui/material'

const DocumentCard = React.lazy(() => import('./DocumentCard'))

interface DocumentGridProps {
  documents: any[]
  moveCard: (dragIndex: number, hoverIndex: number) => void
  onCardClick: (image: string) => void
}

export const DocumentGrid: React.FC<DocumentGridProps> = ({ documents, moveCard, onCardClick }) => {
  const [, drop] = useDrop(() => ({ accept: 'CARD' }))

  return (
    <Grid container spacing={3} ref={drop}>
      {documents.map((doc, index) => (
        <Grid item xs={12} sm={6} md={4} key={doc.id}>
          <DocumentCard
            index={index}
            id={doc.id}
            document={doc}
            moveCard={moveCard}
            onClick={() => onCardClick(doc.image)}
          />
        </Grid>
      ))}
    </Grid>
  )
}
