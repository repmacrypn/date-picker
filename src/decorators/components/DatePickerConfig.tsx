import React from 'react'

import { ErrorBoundary } from '@/components/ErrorBoundary'
import { ErrorFallback } from '@/components/ErrorBoundary/ErrorFallback'
import { Theme } from '@/components/Theme'
import { withGlobalConfig } from '@/decorators'
import { IGlobalConfig } from '@/decorators/interface'
import { GlobalStyles } from '@/styles'

const GlobalConfig = ({ children }: IGlobalConfig) => {
  return (
    <Theme>
      <ErrorBoundary fallback={<ErrorFallback />}>
        <GlobalStyles />
        {children}
      </ErrorBoundary>
    </Theme>
  )
}

export default withGlobalConfig(GlobalConfig)
