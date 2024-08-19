import React from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

interface DocumentCardProps {
  id: string
  index: number
  document: any
  moveCard: (dragIndex: number, hoverIndex: number) => void
  onClick: () => void
}

 const DocumentCard: React.FC<DocumentCardProps> = ({ id, index, document, moveCard, onClick }) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const [, drop] = useDrop({
    accept: 'CARD',
    hover(item: { index: number }) {
      if (!ref.current) return
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) return
      moveCard(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  drag(drop(ref))
  return (
    <Card ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }} onClick={onClick}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={document.image} alt={document.title} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {document.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {document.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
export default DocumentCard
