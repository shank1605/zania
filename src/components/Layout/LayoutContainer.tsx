import React from 'react'
import { Container, Grid } from '@mui/material'

interface ContainerLayoutProps {
  children: React.ReactNode
}

const ContainerLayout: React.FC<ContainerLayoutProps> = ({ children }) => (
  <Container>
    <Grid container spacing={2}>
      {children}
    </Grid>
  </Container>
)

export default ContainerLayout
