import React, { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'

import { DatePicker } from '@/components/DatePicker'
import { DateViewSelector } from '@/components/DateViewSelector'
import { YearsMonthsView } from '@/components/YearsMonthsView'
import { CustomInput } from '@/components/YearsMonthsView/CustomInput'
import GlobalConfig from '@/decorators/components/DatePickerConfig'

import { Container } from './styled'

export const Calendar = () => {
  const [date, setDate] = useState<Dayjs>(dayjs())
  const [showMonthYear, setShowMonthYear] = useState(false)

  const onClickShowMonthYear = () => {
    setShowMonthYear((prev) => !prev)
  }

  const onChange = (date: Dayjs) => {
    setDate(date)
  }

  return (
    <GlobalConfig>
      <Container>
        <CustomInput
          date={date}
          onChooseDate={onChange}
          placeholder='Choose Date (yyyy-mm-dd)'
        />
        <DateViewSelector
          shownDate={date}
          onChange={onChange}
          setShowMonthYear={onClickShowMonthYear}
        />
        {showMonthYear && (
          <YearsMonthsView
            shownDate={date}
            onChange={onChange}
            setShowMonthYear={onClickShowMonthYear}
          />
        )}
        <DatePicker selectedDate={date} shownDate={date} onChange={onChange} />
      </Container>
    </GlobalConfig>
  )
}
