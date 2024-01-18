import styled from 'styled-components'

export const Container = styled.div`
  max-width: ${({ theme }) => theme.valueInPx.px300};
  width: 100%;
  padding: ${({ theme }) => theme.valueInPx.px10};
  box-shadow: ${({ theme }) => theme.usedColors.white3} 0px 3px 8px;
  border-radius: ${({ theme }) => theme.valueInPx.px8};
`
