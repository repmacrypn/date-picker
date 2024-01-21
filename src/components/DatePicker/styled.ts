import styled, { css } from 'styled-components'

const daysStyles = css`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${({ theme }) => theme.valueInPx.px8};
`

export const WeekDays = styled.div`
  ${daysStyles}
  margin-bottom: ${({ theme }) => theme.valueInPx.px2};
`

export const WeekDay = styled.h2`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.valueInPx.px10};
  color: ${({ theme }) => theme.usedColors.black1};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;
`

export const DateDays = styled.div`
  ${daysStyles}
`

export const DateDay = styled.div<{
  $isSelected?: boolean
  $isCurrentMonth: boolean | string
  $isWeekend: boolean
  $isToday: boolean
}>`
  padding: ${({ theme }) => theme.valueInPx.px8};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  border-radius: ${({ theme }) => theme.valueInPx.px8};
  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.usedColors.white1 : 'inherit'};
  background-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.usedColors.blue1 : 'transparent'};
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    cursor: ${({ $isSelected }) => ($isSelected ? 'default' : 'pointer')};
    background-color: ${({ $isSelected, theme }) =>
      $isSelected ? theme.usedColors.blue1 : theme.usedColors.white2};
  }

  ${({ $isCurrentMonth }) =>
    !$isCurrentMonth &&
    css`
      color: ${({ theme }) => theme.usedColors.gray4};
    `}

  ${({ $isWeekend }) =>
    $isWeekend &&
    css`
      color: ${({ theme }) => theme.usedColors.red1};
    `}

  ${({ $isToday }) =>
    $isToday &&
    css`
      border: 1px solid ${({ theme }) => theme.usedColors.gray2};
    `}
`
