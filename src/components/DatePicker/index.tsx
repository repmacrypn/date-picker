import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'

import { CustomInput } from '@/components/CustomInput'
import { InputEnum } from '@/components/CustomInput/interface'
import { FormatEnum } from '@/constants/dateFormats'
import { WeekendStatusEnum } from '@/types'
import { getCalendarRows, getDayOfWeek } from '@/utils/helpers/date'

import { IDatePicker } from './interface'
import {
  CalendarBlock,
  CircleMarker,
  CircleTaskMarker,
  ClearRangeBlock,
  ClearRangeItem,
  DateDay,
  DateDays,
  Task,
  TaskList,
  TooltipBlock,
  TooltipItem,
  WeekDay,
  WeekDays,
} from './styled'

export const DatePicker = memo(
  ({
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
  }: IDatePicker) => {
    const [holiday, setHoliday] = useState<null | string>(null)
    const [showTooltip, setShowTooltip] = useState(false)
    const [showTaskControl, setShowTaskControl] = useState(false)
    const [taskValue, setTaskValue] = useState('')

    const dateKey = selectedDate.format(FormatEnum.YearMonthDayFormat)
    const rangeNoEmpty = rangeDays?.from && rangeDays?.to

    const handleMouseEnter = useCallback(
      (tooltip: string | undefined) => () => {
        if (tooltip) {
          setHoliday(tooltip)
          setShowTooltip(true)
        }
      },
      [],
    )

    const isInRange = (date: Dayjs, startDate: string, endDate: string) => {
      return date.isAfter(startDate, 'day') && date.isBefore(endDate, 'day')
    }

    const handleMouseLeave = useCallback(() => {
      setHoliday(null)
      setShowTooltip(false)
    }, [])

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
        if (onChange) {
          setShowTaskControl(true)
          onChange(value)
        }

        if (setRangeDays) {
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
        handleChangeState,
        onChange,
        rangeNoEmpty,
        setRangeDays,
        rangeDays?.from,
        rangeDays?.to,
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
      const tasksForDate = tasksDate[dateKey] || []

      if (taskValue) {
        const updatedTasks = { ...tasksDate, [dateKey]: [...tasksForDate, taskValue] }

        setTasksDate(updatedTasks)
        localStorage.setItem('tasks', JSON.stringify(updatedTasks))
      }
    }, [dateKey, setTasksDate, taskValue, tasksDate])

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

      if (storedTasks) {
        setTasksDate(JSON.parse(storedTasks))
      }
    }, [setTasksDate])

    return (
      <CalendarBlock>
        <WeekDays>
          {rows[0].map(({ value }, i) => (
            <WeekDay
              key={i}
              $isStartOfWeek={startOfWeek === getDayOfWeek(value.format(FormatEnum.Day))}
              onClick={changeStartWeekDay(value.format(FormatEnum.Day))}
            >
              {value.format(FormatEnum.Day)}
            </WeekDay>
          ))}
        </WeekDays>
        {rows.map((cells, rowIndex) => (
          <DateDays
            key={rowIndex}
            $withWeekends={statusWeekends === WeekendStatusEnum.WithWeekEnds}
          >
            {cells.map(
              ({
                text,
                value,
                isCurrentMonth,
                isWeekend,
                isToday,
                isHoliday,
                holidayName,
              }) => {
                const dateKey = value.format(FormatEnum.YearMonthDayFormat)
                const tasksForDate = tasksDate[dateKey] || []
                const isStartDate =
                  rangeDays &&
                  dateKey ===
                    (dayjs(rangeDays.from).isBefore(getEndDateForClasses())
                      ? rangeDays.from
                      : rangeDays.to)
                const isEndDate =
                  rangeDays &&
                  dateKey ===
                    (dayjs(rangeDays.from).isBefore(getEndDateForClasses())
                      ? rangeDays.to
                      : rangeDays.from)
                const isDateInRange = rangeDays
                  ? isInRange(value, rangeDays?.from, getEndDateForClasses())
                  : false

                return (
                  <DateDay
                    key={`${text} - ${value}`}
                    $isSelected={value.toString() === selectedDate?.toString()}
                    $isCurrentMonth={isCurrentMonth || false}
                    $isWeekend={isWeekend || false}
                    $isToday={isToday || false}
                    $isHoliday={isHoliday || false}
                    $isStartDate={isStartDate}
                    $isEndDate={isEndDate}
                    $isInRange={isDateInRange}
                    onClick={handleSelectDate(value)}
                    onMouseEnter={handleMouseEnter(holidayName)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {text}
                    {tasksForDate.length > 0 && <CircleTaskMarker />}
                  </DateDay>
                )
              },
            )}
          </DateDays>
        ))}
        {showTooltip && (
          <TooltipBlock>
            <CircleMarker />
            <TooltipItem>{holiday}</TooltipItem>
          </TooltipBlock>
        )}
        {tasksDate[dateKey] && (
          <TaskList>
            {tasksDate[dateKey].map((task) => {
              return <Task key={`${task}-${dateKey}`}>{task}</Task>
            })}
          </TaskList>
        )}
        {showTaskControl && (
          <CustomInput
            type={InputEnum.Task}
            taskValue={taskValue}
            setTaskValue={setTaskValue}
            setTaskInCalendar={setTaskInCalendar}
            placeholder='Task for the selected date'
          />
        )}
        {rangeNoEmpty && (
          <ClearRangeBlock>
            <ClearRangeItem onClick={onClearRangeDays}>Clear the range</ClearRangeItem>
          </ClearRangeBlock>
        )}
      </CalendarBlock>
    )
  },
)
