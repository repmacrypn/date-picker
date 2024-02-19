import React, { memo } from 'react'

import { RemoveTaskIcon } from '@/assets/icons/RemoveTaskIcon'
import { CustomInput } from '@/components/CustomInput'
import { FormatEnum, InputEnum, WeekendStatusEnum } from '@/constants/enums'
import { useDatePickerControl } from '@/hooks/useDatePickerControl'
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
  RemoveIcon,
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
      removeTaskFromCalendar,
      isStartDate,
      isEndDate,
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
      <CalendarBlock data-testid='calendarItem'>
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
                const endDate = getEndDateForClasses(rangeDays)
                const isStartDateValue = isStartDate(rangeDays, dateKey, endDate)
                const isEndDateValue = isEndDate(rangeDays, dateKey, endDate)
                const isDateInRange = rangeDays
                  ? isInRange(value, rangeDays?.from, getEndDateForClasses(rangeDays))
                  : false

                return (
                  <DateDay
                    key={`${text} - ${value}`}
                    data-testid='dayCell'
                    $isSelected={value.toString() === selectedDate?.toString()}
                    $isCurrentMonth={isCurrentMonth || false}
                    $isWeekend={isWeekend || false}
                    $isToday={isToday || false}
                    $isHoliday={isHoliday || false}
                    $isStartDate={isStartDateValue}
                    $isEndDate={isEndDateValue}
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
          <TaskList data-testid='taskList'>
            {tasksDate[dateKey].map((task) => {
              return (
                <Task key={`${task}-${dateKey}`}>
                  {task}
                  <RemoveIcon onClick={removeTaskFromCalendar(task)}>
                    <RemoveTaskIcon />
                  </RemoveIcon>
                </Task>
              )
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
