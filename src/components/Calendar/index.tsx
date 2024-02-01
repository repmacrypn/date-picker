import React, { useEffect, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'

import { FilterIcon } from '@/assets/icons/FilterIcon'
import { DatePicker } from '@/components/DatePicker'
import { DateViewSelector } from '@/components/DateViewSelector'
import { Filters } from '@/components/Filters'
import { YearsMonthsView } from '@/components/YearsMonthsView'
import { CustomInput } from '@/components/YearsMonthsView/CustomInput'
import GlobalConfig from '@/decorators/components/DatePickerConfig'
import { WeekendStatusEnum } from '@/types'
import { getDayOfWeek } from '@/utils/helpers/date'

import { IHolidaysResponse } from './interface'
import { Container, FilterItemIcon, InputFilterBlock } from './styled'

export const Calendar = () => {
  const [date, setDate] = useState<Dayjs>(dayjs())
  const [showMonthYear, setShowMonthYear] = useState(false)
  const [showFilter, setShowFilter] = useState(false)
  const [statusWeekends, setStatusWeekends] = useState<WeekendStatusEnum>(
    WeekendStatusEnum.WithWeekEnds,
  )
  const [startOfWeek, setStartOfWeek] = useState<number>(1)
  const [holidays, setHolidays] = useState<IHolidaysResponse | undefined | null>()

  const year = date.format('YYYY')

  const onClickShowMonthYear = () => {
    setShowMonthYear((prev) => !prev)
  }

  const onChange = (date: Dayjs) => {
    setDate(date)
  }

  const onClickShowFilter = () => {
    setShowFilter((prev) => !prev)
  }

  const setNumberStartOfWeek = (dayValue: string) => {
    setStartOfWeek(getDayOfWeek(dayValue))
  }

  useEffect(() => {
    async function fetchHolidays() {
      const response = await fetch(
        `https://calendarific.com/api/v2/holidays?&api_key=022eade2bfd82f139588f89b56a5be9d0f0d648e&country=BY&year=${year}`,
      )
      const data = await response.json()

      setHolidays(data)
    }

    fetchHolidays()
  }, [year])

  return (
    <GlobalConfig>
      <Container>
        <InputFilterBlock>
          <CustomInput
            date={date}
            onChooseDate={onChange}
            placeholder='Choose Date (yyyy-mm-dd)'
          />
          <FilterItemIcon onClick={onClickShowFilter}>
            <FilterIcon />
          </FilterItemIcon>
        </InputFilterBlock>
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
        <DatePicker
          selectedDate={date}
          shownDate={date}
          onChange={onChange}
          startOfWeek={startOfWeek}
          setStartOfWeek={setNumberStartOfWeek}
          holidays={holidays}
          statusWeekends={statusWeekends}
        />
        {showFilter && (
          <Filters
            statusWeekends={statusWeekends}
            setStatusWeekends={setStatusWeekends}
          />
        )}
      </Container>
    </GlobalConfig>
  )
}
