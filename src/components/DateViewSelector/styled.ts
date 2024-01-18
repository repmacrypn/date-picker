import styled, { css } from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.valueInPx.px5} 0;
  width: 100%;
`

const MoveToIconStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.valueInPx.px26};
  height: ${({ theme }) => theme.valueInPx.px26};
  border-radius: 50%;
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.usedColors.white2};
  }
`

export const Left = styled.div`
  ${MoveToIconStyles}
`

export const Right = styled.div`
  ${MoveToIconStyles}
  transform: rotate(180deg);
`

export const Date = styled.h3`
  align-self: center;
  line-height: normal;
  color: ${({ theme }) => theme.usedColors.black1};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`
