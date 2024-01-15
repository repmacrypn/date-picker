import React, { useState } from 'react'

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
  const [selectedDate, setSelectedDate] = useState<Date>()

  const handleDayClick = (date: Date) => {
    setSelectedDate(date)
  }

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
    let currentDate = new Date()

    if (selectedDate) {
      currentDate = new Date(selectedDate)
    }

    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const startDay = new Date(year, month, 1).getDay() || 7 // 1 = Monday, 7 = Sunday
    const days: Date[] = []

    // Add previous month's days
    for (let i = startDay - 2; i >= 0; i--) {
      const date = new Date(year, month, -i)

      days.unshift(date)
    }

    // Add current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i)

      days.push(date)
    }

    // Add next month's days
    const endDay = new Date(year, month, daysInMonth).getDay() || 7 // 1 = Monday, 7 = Sunday

    for (let i = 1; i <= 7 - endDay; i++) {
      const date = new Date(year, month + 1, i)

      days.push(date)
    }

    return (
      <Datedays>
        {days.map((date) => (
          <Dateday
            key={date.toISOString()}
            onClick={() => handleDayClick(date)}
            $isSelected={
              selectedDate && date.toDateString() === selectedDate.toDateString()
            }
          >
            {date.getDate()}
          </Dateday>
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
