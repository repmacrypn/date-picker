import { useCallback, useEffect, useMemo, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'

import { IDatePicker } from '@/components/DatePicker/interface'
import { FormatEnum } from '@/constants/dateFormats'
import { getCalendarRows, ICalendarCell } from '@/utils/helpers/date'

interface IUseDatePickerControl {
  rows: Array<ICalendarCell[]>
  rangeNoEmpty: string | undefined
  holiday: null | string
  taskValue: string
  showTooltip: boolean
  showTaskControl: boolean
  handleMouseEnter: (tooltip: string | undefined) => () => void
  handleMouseLeave: () => void
  setTaskInCalendar: () => void
  setTaskValue: (task: string) => void
  changeStartWeekDay: (value: string) => () => void
  onClearRangeDays: () => void
  getEndDateForClasses: () => string
  handleSelectDate: (value: Dayjs) => () => void
  isInRange: (date: Dayjs, startDate: string, endDate: string) => boolean
}

export const useDatePickerControl = ({
  shownDate,
  selectedDate,
  onChange,
  startOfWeek,
  setStartOfWeek,
  holidays,
  statusWeekends,
  setTasksDate,
  tasksDate,
  rangeDays,
  setRangeDays,
  isRange,
}: IDatePicker): IUseDatePickerControl => {
  const [holiday, setHoliday] = useState<null | string>(null)
  const [showTooltip, setShowTooltip] = useState(false)
  const [showTaskControl, setShowTaskControl] = useState(false)
  const [taskValue, setTaskValue] = useState('')

  const rangeNoEmpty = rangeDays?.from && rangeDays?.to

  const handleMouseEnter = useCallback(
    (tooltip: string | undefined) => () => {
      if (tooltip) {
        setHoliday(tooltip)
        setShowTooltip(true)
      }
    },
    [setHoliday, setShowTooltip],
  )

  const handleMouseLeave = useCallback(() => {
    setHoliday(null)
    setShowTooltip(false)
  }, [setHoliday, setShowTooltip])

  const isInRange = (date: Dayjs, startDate: string, endDate: string) => {
    return date.isAfter(startDate, 'day') && date.isBefore(endDate, 'day')
  }

  const handleChangeState = useCallback(
    (from: string, to: string) => {
      if (setRangeDays) {
        if (dayjs(from).isBefore(to)) {
          setRangeDays({
            from,
            to,
          })
        } else {
          setRangeDays({
            from: to,
            to: from,
          })
        }
      }
    },
    [setRangeDays],
  )

  const handleSelectDate = useCallback(
    (value: Dayjs) => () => {
      if (onChange && isRange) {
        setShowTaskControl(true)
        onChange(value)
      }

      if (setRangeDays && !isRange) {
        const getDayFormat = (day: Dayjs) => {
          return dayjs(day).format(FormatEnum.YearMonthDayFormat)
        }

        const dateFormat = getDayFormat(value)

        if (!rangeDays?.from && !rangeDays?.to.length) {
          setRangeDays({ from: dateFormat, to: '' })
        }
        if (!rangeDays?.to && rangeDays?.from) {
          handleChangeState(rangeDays?.from, dateFormat)
        } else if (!rangeDays?.to.length && rangeDays?.from) {
          handleChangeState(rangeDays?.from, dateFormat)
        } else if (rangeNoEmpty) {
          setRangeDays({ from: dateFormat, to: '' })
        }
      }
    },
    [
      setRangeDays,
      rangeDays,
      setShowTaskControl,
      handleChangeState,
      rangeNoEmpty,
      onChange,
      isRange,
    ],
  )

  const getEndDateForClasses = useCallback(() => {
    if (rangeDays) {
      if (rangeDays.to) return rangeDays.to

      return rangeDays.from
    }

    return ''
  }, [rangeDays])

  const onClearRangeDays = useCallback(() => {
    if (setRangeDays) {
      setRangeDays({
        from: '',
        to: '',
      })
    }
  }, [setRangeDays])

  const changeStartWeekDay = useCallback(
    (value: string) => () => {
      setStartOfWeek(value)
    },
    [setStartOfWeek],
  )

  const setTaskInCalendar = useCallback(() => {
    if (selectedDate) {
      const dateKey = selectedDate?.format(FormatEnum.YearMonthDayFormat)
      const tasksForDate = tasksDate ? tasksDate[dateKey] || [] : []

      if (taskValue && setTasksDate) {
        const updatedTasks = { ...tasksDate, [dateKey]: [...tasksForDate, taskValue] }

        setTasksDate(updatedTasks)
        localStorage.setItem('tasks', JSON.stringify(updatedTasks))
      }
    }
  }, [setTasksDate, taskValue, tasksDate, selectedDate])

  const rows = useMemo(() => {
    return getCalendarRows(
      shownDate,
      startOfWeek,
      holidays?.response.holidays,
      statusWeekends,
    )
  }, [shownDate, startOfWeek, holidays, statusWeekends])

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks')

    if (storedTasks && setTasksDate) {
      setTasksDate(JSON.parse(storedTasks))
    }
  }, [setTasksDate])

  return {
    rows,
    rangeNoEmpty,
    holiday,
    taskValue,
    showTooltip,
    showTaskControl,
    handleMouseEnter,
    handleMouseLeave,
    setTaskInCalendar,
    setTaskValue,
    changeStartWeekDay,
    onClearRangeDays,
    getEndDateForClasses,
    handleSelectDate,
    isInRange,
  }
}
