import React, { ComponentType } from 'react'

import { IGlobalConfig } from './interface'

export const withGlobalConfig = <P extends object>(Component: ComponentType<P>) => {
  return (props: IGlobalConfig & P) => <Component {...props} />
}
