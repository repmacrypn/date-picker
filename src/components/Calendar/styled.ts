import styled from 'styled-components'

export const Container = styled.div`
  max-width: ${({ theme }) => theme.valueInPx.px300};
  width: 100%;
  padding: ${({ theme }) => theme.valueInPx.px10};
  box-shadow: ${({ theme }) => theme.usedColors.white3} 0px 3px 8px;
  border-radius: ${({ theme }) => theme.valueInPx.px8};
`

export const InputFilterBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
  width: 100%;
`

export const FilterItemIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`
