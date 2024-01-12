import styled from 'styled-components'

export const Text = styled.p`
  padding: ${({ theme }) => theme.valueInPx.px10};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  text-align: center;
  line-height: 1.5;
`
