import React, { useMemo, useState } from 'react'
import { Dayjs } from 'dayjs'

import GlobalConfig from '@/decorators/components/DatePickerConfig'
import { getCalendarRows } from '@/utils/helpers/date'

import { IDatePicker } from './interface'
import { DateDay, DateDays, WeekDay, WeekDays } from './styled'

export const DatePicker = ({ shownDate, selectedDate, onChange }: IDatePicker) => {
  const [startOfWeek, setStartOfWeek] = useState(1)

  const handleSelectDate = (value: Dayjs) => {
    return () => onChange(value)
  }

  const rows = useMemo(() => {
    return getCalendarRows(shownDate, startOfWeek)
  }, [shownDate, startOfWeek])

  return (
    <GlobalConfig>
      <WeekDays>
        {rows[0].map(({ value }, i) => (
          <WeekDay key={i}>{value.format('dd')}</WeekDay>
        ))}
      </WeekDays>
      {rows.map((cells, rowIndex) => (
        <DateDays key={rowIndex}>
          {cells.map(({ text, value, isCurrentMonth, isWeekend, isToday }, i) => {
            return (
              <DateDay
                key={`${text} - ${i}`}
                $isSelected={value.toString() === selectedDate?.toString()}
                $isCurrentMonth={isCurrentMonth || false}
                $isWeekend={isWeekend || false}
                $isToday={isToday || false}
                onClick={handleSelectDate(value)}
              >
                {text}
              </DateDay>
            )
          })}
        </DateDays>
      ))}
    </GlobalConfig>
  )
}
