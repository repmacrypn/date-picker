import { Component, ErrorInfo, ReactNode } from 'react'

import { IErrorBoundaryProps, IErrorBoundaryState } from './interface'

export class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): IErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // eslint-disable-next-line no-console
    console.error('Error:', error, errorInfo)
  }

  render(): ReactNode {
    const { children, fallback } = this.props
    const { hasError } = this.state

    if (hasError) return fallback

    return children
  }
}
