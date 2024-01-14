import React from 'react'

import { MoveToIcon } from '@/assets/icons/MoveToIcon'
import GlobalConfig from '@/decorators/components/DatePickerConfig'

import {
  CalendarContainer,
  Dateday,
  Datedays,
  HeaderContainer,
  HeaderTitle,
  Left,
  Right,
  Weekday,
  Weekdays,
} from './styled'

export const DatePicker = () => {
  const renderWeekDays = () => {
    const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

    return (
      <Weekdays>
        {weekdays.map((weekday) => (
          <Weekday key={weekday}>{weekday}</Weekday>
        ))}
      </Weekdays>
    )
  }

  const renderDateDays = () => {
    const dateDays = []

    for (let i = 1; i < 35; i++) dateDays.push(i)

    return (
      <Datedays>
        {dateDays.map((dateDay) => (
          <Dateday key={dateDay}>{dateDay}</Dateday>
        ))}
      </Datedays>
    )
  }

  return (
    <GlobalConfig>
      <CalendarContainer>
        <HeaderContainer>
          <Left>
            <MoveToIcon />
          </Left>
          <HeaderTitle>November 2022</HeaderTitle>
          <Right>
            <MoveToIcon />
          </Right>
        </HeaderContainer>
        {renderWeekDays()}
        {renderDateDays()}
      </CalendarContainer>
    </GlobalConfig>
  )
}
