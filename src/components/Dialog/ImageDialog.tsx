import React from 'react'
import { Dialog, DialogContent } from '@mui/material'

interface ImageDialogProps {
  open: boolean
  imageSrc: string
  onClose: () => void
}

const ImageDialog: React.FC<ImageDialogProps> = ({ open, imageSrc, onClose }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogContent>
      <img src={imageSrc} alt="Selected" style={{ width: '100%' }} />
    </DialogContent>
  </Dialog>
)

export default ImageDialog
