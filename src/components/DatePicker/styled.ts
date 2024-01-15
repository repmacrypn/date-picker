import styled, { css } from 'styled-components'

export const CalendarContainer = styled.section`
  padding: ${({ theme }) => theme.valueInPx.px10};
  max-width: ${({ theme }) => theme.valueInPx.px300};
  width: 100%;
`

export const HeaderContainer = styled.header`
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

export const HeaderTitle = styled.h3`
  align-self: center;
  color: ${({ theme }) => theme.usedColors.black1};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`

const daysStyles = css`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${({ theme }) => theme.valueInPx.px4};
`

export const Weekdays = styled.div`
  ${daysStyles}
  margin-bottom: ${({ theme }) => theme.valueInPx.px2};
`

export const Weekday = styled.h2`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.valueInPx.px10};
  color: ${({ theme }) => theme.usedColors.black2};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;
`

export const Datedays = styled.div`
  ${daysStyles}
`

export const Dateday = styled.div<{ $isSelected?: boolean }>`
  padding: ${({ theme }) => theme.valueInPx.px8};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  border-radius: ${({ theme }) => theme.valueInPx.px8};
  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.usedColors.white1 : 'inherit'};
  background-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.usedColors.blue1 : 'transparent'};

  &:hover {
    cursor: ${({ $isSelected }) => ($isSelected ? 'default' : 'pointer')};
    background-color: ${({ $isSelected, theme }) =>
      $isSelected ? theme.usedColors.blue1 : theme.usedColors.white2};
  }
`
