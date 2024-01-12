import React from 'react'

import { Container } from '@/components/Button/styled'
import GlobalConfig from '@/decorators/components/DatePickerConfig'

export const Button = ({ label }: { label: string }) => {
  return (
    <GlobalConfig>
      <Container>{label}</Container>
    </GlobalConfig>
  )
}
