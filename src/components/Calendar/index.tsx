import React, { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'

import { DatePicker } from '@/components/DatePicker'
import { DateViewSelector } from '@/components/DateViewSelector'
import GlobalConfig from '@/decorators/components/DatePickerConfig'

import { Container } from './styled'

export const Calendar = () => {
  const [date, setDate] = useState<Dayjs>(dayjs())
  const [shownDate, setShownDate] = useState(date.clone())
  const [showMonthYear, setShowMonthYear] = useState(false)

  const onChange = (date: Dayjs) => {
    setDate(date)
  }

  return (
    <GlobalConfig>
      <Container>
        <DateViewSelector
          shownDate={shownDate}
          setShownDate={setShownDate}
          showMonthYear={showMonthYear}
          setShowMonthYear={setShowMonthYear}
        />
        <DatePicker selectedDate={date} shownDate={shownDate} onChange={onChange} />
      </Container>
    </GlobalConfig>
  )
}
