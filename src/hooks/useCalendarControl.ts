import { useCallback, useEffect, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'

import {
  IHolidaysResponse,
  IRangeDateObj,
  ITaskInCalendar,
} from '@/components/Calendar/types'
import { FormatEnum, WeekendStatusEnum } from '@/constants/enums'
import { IUseCalendarPickerControl } from '@/types'
import { getDayOfWeek } from '@/utils/helpers/date'

const CALENDAR_API_URL = process.env.REACT_APP_CALENDAR_URL
const CALENDAR_API_KEY = process.env.REACT_APP_CALENDAR_KEY

export const useCalendarControl = (): IUseCalendarPickerControl => {
  const [date, setDate] = useState<Dayjs>(dayjs())
  const [showMonthYear, setShowMonthYear] = useState(false)
  const [showFilter, setShowFilter] = useState(false)
  const [statusWeekends, setStatusWeekends] = useState<WeekendStatusEnum>(
    WeekendStatusEnum.WithWeekEnds,
  )
  const [startOfWeek, setStartOfWeek] = useState(1)
  const [holidays, setHolidays] = useState<IHolidaysResponse | undefined | null>()
  const [tasksDate, setTasksDate] = useState<ITaskInCalendar>({})
  const [rangeDays, setRangeDays] = useState<IRangeDateObj>({
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
        `${CALENDAR_API_URL}/holidays?&api_key=${CALENDAR_API_KEY}&country=BY&year=${year}`,
      )
      const data = await response.json()

      setHolidays(data)
    }

    fetchHolidays()
  }, [year])

  return {
    onClickShowFilter,
    rangeDays,
    setFromDate,
    setToDate,
    showFilter,
    statusWeekends,
    setStatusWeekends,
    setTasksDate,
    onClickShowMonthYear,
    showMonthYear,
    startOfWeek,
    setNumberStartOfWeek,
    holidays,
    setShowMonthYear,
    tasksDate,
    setRangeDays,
    date,
    onChange,
  }
}
