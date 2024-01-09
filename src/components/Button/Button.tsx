import React from 'react'

import { IButton } from './Button.types'

const Button = ({ text }: IButton) => {
  return <button type='button'>{text}</button>
}

export default Button
