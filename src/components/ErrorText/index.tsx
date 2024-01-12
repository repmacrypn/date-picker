import React from 'react'

import { IErrorText } from './interface'
import { Text } from './styled'

export const ErrorText = ({ children }: IErrorText) => {
  return <Text>Oops, Something went wrong... {children} Try to reload the page</Text>
}
