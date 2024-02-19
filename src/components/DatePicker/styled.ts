import styled, { css } from 'styled-components'

import { DayCellProps } from '@/components/Calendar/types'
import { forwardPropGuard } from '@/utils/helpers/date'

export const CalendarBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
`

export const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${({ theme }) => theme.valueInPx.px8};
  margin-bottom: ${({ theme }) => theme.valueInPx.px2};
`

export const WeekDay = styled('h2').withConfig({
  shouldForwardProp: forwardPropGuard<{ $isStartOfWeek: boolean }>(['$isStartOfWeek']),
})<{ $isStartOfWeek: boolean }>`
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

export const DateDays = styled('div').withConfig({
  shouldForwardProp: forwardPropGuard<{ $withWeekends: boolean }>(['$withWeekends']),
})<{ $withWeekends: boolean }>`
  display: grid;
  grid-template-columns: repeat(${({ $withWeekends }) => ($withWeekends ? 7 : 5)}, 1fr);
  gap: ${({ theme }) => theme.valueInPx.px8};
`

export const DateDay = styled('div').withConfig({
  shouldForwardProp: forwardPropGuard<DayCellProps>([
    '$isSelected',
    '$isCurrentMonth',
    '$isWeekend',
    '$isToday',
    '$isHoliday',
    '$isInRange',
    '$isStartDate',
    '$isEndDate',
  ]),
})<DayCellProps>`
  padding: ${({ theme }) => theme.valueInPx.px8};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    cursor: ${({ $isSelected }) => ($isSelected ? 'default' : 'pointer')};
    background-color: ${({ $isSelected, theme }) =>
      $isSelected ? theme.usedColors.blue1 : theme.usedColors.white2};
  }

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

    background-color: ${({
    $isInRange,
    $isStartDate,
    $isSelected,
    $isEndDate,
    theme,
  }) => {
    if ($isInRange) {
      return theme.usedColors.blue3
    }
    if ($isStartDate) {
      return theme.usedColors.blue2
    }
    if ($isEndDate || $isSelected) {
      return theme.usedColors.blue1
    }

    return 'transparent'
  }};

  color: ${({
    $isEndDate,
    $isStartDate,
    $isCurrentMonth,
    $isSelected,
    $isWeekend,
    $isHoliday,
    $isInRange,
    theme,
  }) => {
    if ($isEndDate || $isStartDate || $isSelected) {
      return theme.usedColors.white1
    }
    if ($isInRange) {
      return theme.usedColors.blue1
    }
    if ($isWeekend) {
      return theme.usedColors.red1
    }
    if ($isHoliday) {
      return theme.usedColors.green1
    }
    if (!$isCurrentMonth) {
      return theme.usedColors.gray4
    }

    return 'inherit'
  }};

  border-radius: ${({ $isInRange, $isStartDate, $isEndDate, theme }) => {
    if ($isInRange || $isStartDate || $isEndDate) {
      return 0
    }

    return theme.valueInPx.px8
  }};

  border-bottom-left-radius: ${({ $isStartDate, theme }) => {
    if ($isStartDate) {
      return theme.valueInPx.px8
    }
  }};

  border-bottom-right-radius: ${({ $isEndDate, theme }) => {
    if ($isEndDate) {
      return theme.valueInPx.px8
    }
  }};

  border-top-left-radius: ${({ $isStartDate, theme }) => {
    if ($isStartDate) {
      return theme.valueInPx.px8
    }
  }};

  border-top-right-radius: ${({ $isEndDate, theme }) => {
    if ($isEndDate) {
      return theme.valueInPx.px8
    }
  }};
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

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.valueInPx.px5};
  position: relative;
  width: 100%;
  margin: ${({ theme }) => theme.valueInPx.px20} ${({ theme }) => theme.valueInPx.px0};
`

export const Task = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: ${({ theme }) => theme.valueInPx.px10};
  margin: ${({ theme }) => theme.valueInPx.px0} ${({ theme }) => theme.valueInPx.px10};
  width: 100%;
  border-radius: ${({ theme }) => theme.valueInPx.px8};
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: 1.4;
  background-color: ${({ theme }) => theme.usedColors.gray1};
  color: ${({ theme }) => theme.usedColors.black};
`

export const RemoveIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: ${({ theme }) => theme.valueInPx.px5};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`

export const CircleTaskMarker = styled.div`
  &::before {
    content: '';
    position: absolute;
    top: 25%;
    left: 22%;
    width: ${({ theme }) => theme.valueInPx.px8};
    height: ${({ theme }) => theme.valueInPx.px8};
    margin-right: ${({ theme }) => theme.valueInPx.px10};
    background-color: ${({ theme }) => theme.usedColors.green1};
    border-radius: 50%;
  }
`

export const ClearRangeBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const ClearRangeItem = styled.div`
  text-align: center;
  border-bottom: ${({ theme }) => `1px solid ${theme.usedColors.gray1}`};
  margin: ${({ theme }) => theme.valueInPx.px10} ${({ theme }) => theme.valueInPx.px0};
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    border-bottom: none;
  }

  &:active {
    transform: ${({ theme }) => theme.animation.transformActive};
  }
`
