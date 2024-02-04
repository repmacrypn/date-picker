import React, { memo, useCallback, useEffect, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'

import { FilterIcon } from '@/assets/icons/FilterIcon'
import { CustomInput } from '@/components/CustomInput'
import { InputEnum } from '@/components/CustomInput/interface'
import { DatePicker } from '@/components/DatePicker'
import { DateViewSelector } from '@/components/DateViewSelector'
import { Filters } from '@/components/Filters'
import { YearsMonthsView } from '@/components/YearsMonthsView'
import { FormatEnum } from '@/constants/dateFormats'
import GlobalConfig from '@/decorators/components/DatePickerConfig'
import { WeekendStatusEnum } from '@/types'
import { getDayOfWeek } from '@/utils/helpers/date'

import { IHolidaysResponse, IObj, ITaskInCalendar } from './interface'
import { Container, FilterItemIcon, InputFilterBlock } from './styled'

const CALENDAR_API_URL = process.env.REACT_APP_CALENDAR_URL
const CALENDAR_API_KEY = process.env.REACT_APP_CALENDAR_KEY

export const Calendar = memo(() => {
  const [date, setDate] = useState<Dayjs>(dayjs())
  const [showMonthYear, setShowMonthYear] = useState(false)
  const [showFilter, setShowFilter] = useState(false)
  const [statusWeekends, setStatusWeekends] = useState<WeekendStatusEnum>(
    WeekendStatusEnum.WithWeekEnds,
  )
  const [startOfWeek, setStartOfWeek] = useState(1)
  const [holidays, setHolidays] = useState<IHolidaysResponse | undefined | null>()
  const [tasksDate, setTasksDate] = useState<ITaskInCalendar>({})
  const [rangeDays, setRangeDays] = useState<IObj>({
    from: '',
    to: '',
  })

  const year = date.format(FormatEnum.Year)

  const onClickShowMonthYear = useCallback(() => {
    setShowMonthYear((prev) => !prev)
  }, [])

  const setFromDate = useCallback(
    (date: Dayjs) => {
      setRangeDays({
        ...rangeDays,
        from: date.format(FormatEnum.YearMonthDayFormat),
      })
    },
    [rangeDays],
  )

  const setToDate = useCallback(
    (date: Dayjs) => {
      setRangeDays({
        ...rangeDays,
        to: date.format(FormatEnum.YearMonthDayFormat),
      })
    },
    [rangeDays],
  )

  const onChange = useCallback((date: Dayjs) => {
    setDate(date)
  }, [])

  const onClickShowFilter = useCallback(() => {
    setShowFilter((prev) => !prev)
  }, [])

  const setNumberStartOfWeek = useCallback((dayValue: string) => {
    setStartOfWeek(getDayOfWeek(dayValue))
  }, [])

  useEffect(() => {
    async function fetchHolidays() {
      const response = await fetch(
        `${CALENDAR_API_URL}holidays?&api_key=${CALENDAR_API_KEY}&country=BY&year=${year}`,
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
            type={InputEnum.Date}
            date={date}
            onChooseDate={onChange}
            placeholder='Choose Date (yyyy-mm-dd)'
          />
          <FilterItemIcon onClick={onClickShowFilter}>
            <FilterIcon />
          </FilterItemIcon>
        </InputFilterBlock>
        <CustomInput
          type={InputEnum.Date}
          date={rangeDays.from.length > 0 && dayjs(rangeDays.from)}
          onChooseDate={setFromDate}
          placeholder='Choose a date from'
        />
        <CustomInput
          type={InputEnum.Date}
          date={rangeDays.to.length > 0 && dayjs(rangeDays.to)}
          onChooseDate={setToDate}
          placeholder='Choose a date to'
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
        <DatePicker
          selectedDate={date}
          shownDate={date}
          onChange={onChange}
          startOfWeek={startOfWeek}
          setStartOfWeek={setNumberStartOfWeek}
          holidays={holidays}
          statusWeekends={statusWeekends}
          setTasksDate={setTasksDate}
          tasksDate={tasksDate}
          rangeDays={rangeDays}
          setRangeDays={setRangeDays}
        />
        {showFilter && (
          <Filters
            statusWeekends={statusWeekends}
            setStatusWeekends={setStatusWeekends}
            setTasksDate={setTasksDate}
            onClickShowFilter={onClickShowFilter}
          />
        )}
      </Container>
    </GlobalConfig>
  )
})
