import React from 'react'

import { ErrorText } from '@/components/ErrorText'

import { Button, Container } from './styled'

export const ErrorFallback = () => {
  const handlerClick = () => {
    window.location.reload()
  }

  return (
    <Container>
      <ErrorText />
      <Button onClick={handlerClick}>Reload the page</Button>
    </Container>
  )
}
