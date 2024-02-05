import React, { memo } from 'react'
import dayjs from 'dayjs'

import { CustomInput } from '@/components/CustomInput'
import { InputEnum } from '@/components/CustomInput/interface'
import { FormatEnum } from '@/constants/dateFormats'
import { useDatePickerControl } from '@/hooks/useDatePickerControl'
import { WeekendStatusEnum } from '@/types'
import { getDayOfWeek } from '@/utils/helpers/date'

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
    isRange,
  }: IDatePicker) => {
    const {
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
    } = useDatePickerControl({
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
    })

    const dateKey = selectedDate?.format(FormatEnum.YearMonthDayFormat)

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
                const tasksForDate = tasksDate ? tasksDate[dateKey] : []
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
                    {tasksForDate?.length > 0 && <CircleTaskMarker />}
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
        {tasksDate && dateKey && tasksDate[dateKey] && (
          <TaskList>
            {tasksDate[dateKey].map((task) => {
              return <Task key={`${task}-${dateKey}`}>{task}</Task>
            })}
          </TaskList>
        )}
        {tasksDate && showTaskControl && (
          <CustomInput
            type={InputEnum.Task}
            taskValue={taskValue}
            setTaskValue={setTaskValue}
            setTaskInCalendar={setTaskInCalendar}
            placeholder='Task for the selected date'
          />
        )}
        {rangeDays && rangeNoEmpty && (
          <ClearRangeBlock>
            <ClearRangeItem onClick={onClearRangeDays}>Clear the range</ClearRangeItem>
          </ClearRangeBlock>
        )}
      </CalendarBlock>
    )
  },
)
