import styled, { css } from 'styled-components'

export const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${({ theme }) => theme.valueInPx.px8};
  margin-bottom: ${({ theme }) => theme.valueInPx.px2};
`

export const WeekDay = styled.h2<{ $isStartOfWeek: boolean }>`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.valueInPx.px10};
  color: ${({ theme }) => theme.usedColors.black1};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border-bottom: ${({ $isStartOfWeek }) =>
    $isStartOfWeek ? '1px solid #b3b3b3' : 'none'};
  text-align: center;
`

export const DateDays = styled.div<{ $withWeekends: boolean }>`
  display: grid;
  grid-template-columns: repeat(${({ $withWeekends }) => ($withWeekends ? 7 : 5)}, 1fr);
  gap: ${({ theme }) => theme.valueInPx.px8};
`

export const DateDay = styled.div<{
  $isSelected?: boolean
  $isCurrentMonth: boolean | string
  $isWeekend: boolean
  $isToday: boolean
  $isHoliday: boolean
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

    ${({ $isHoliday }) =>
    $isHoliday &&
    css`
      color: #39ea18;
    `}
`

export const TooltipBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`
export const TooltipItem = styled.div`
  font-size: 16px;
  font-weight: 600;
`

export const CircleMarker = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 16px;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background-color: #39ea18;
    border-radius: 50%;
    margin-right: 8px;
  }
`
