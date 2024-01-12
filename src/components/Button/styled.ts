import styled from 'styled-components'

export const Container = styled.div`
  display: block;
  background-color: ${({ theme }) => theme.usedColors.blue1};
  padding: ${({ theme }) => theme.valueInPx.px10};
  color: ${({ theme }) => theme.usedColors.white1};
`
