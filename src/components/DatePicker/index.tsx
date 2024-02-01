import React, { useMemo, useState } from 'react'
import { Dayjs } from 'dayjs'

import { WeekendStatusEnum } from '@/types'
import { getCalendarRows, getDayOfWeek } from '@/utils/helpers/date'

import { IDatePicker } from './interface'
import {
  CircleMarker,
  DateDay,
  DateDays,
  TooltipBlock,
  TooltipItem,
  WeekDay,
  WeekDays,
} from './styled'

export const DatePicker = ({
  shownDate,
  selectedDate,
  onChange,
  startOfWeek,
  setStartOfWeek,
  holidays,
  statusWeekends,
}: IDatePicker) => {
  const [tooltip, setTooltip] = useState<null | string>(null)
  const [showTooltip, setShowTooltip] = useState(false)

  const handleMouseEnter = (tooltip: string | undefined) => () => {
    if (tooltip) {
      setTooltip(tooltip)
      setShowTooltip(true)
    }
  }

  const handleMouseLeave = () => {
    setTooltip(null)
    setShowTooltip(false)
  }

  const handleSelectDate = (value: Dayjs) => {
    return () => onChange(value)
  }

  const rows = useMemo(() => {
    return getCalendarRows(
      shownDate,
      startOfWeek,
      holidays?.response.holidays,
      statusWeekends,
    )
  }, [shownDate, startOfWeek, holidays, statusWeekends])

  const onClickCell = (value: string) => () => {
    setStartOfWeek(value)
  }

  return (
    <>
      <WeekDays>
        {rows[0].map(({ value }, i) => (
          <WeekDay
            key={i}
            $isStartOfWeek={startOfWeek === getDayOfWeek(value.format('dd'))}
            onClick={onClickCell(value.format('dd'))}
          >
            {value.format('dd')}
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
              return (
                <DateDay
                  key={`${text} - ${value}`}
                  $isSelected={value.toString() === selectedDate?.toString()}
                  $isCurrentMonth={isCurrentMonth || false}
                  $isWeekend={isWeekend || false}
                  $isToday={isToday || false}
                  $isHoliday={isHoliday || false}
                  onClick={handleSelectDate(value)}
                  onMouseEnter={handleMouseEnter(holidayName)}
                  onMouseLeave={handleMouseLeave}
                >
                  {text}
                </DateDay>
              )
            },
          )}
        </DateDays>
      ))}
      {showTooltip && (
        <TooltipBlock>
          <CircleMarker />
          <TooltipItem>{tooltip}</TooltipItem>
        </TooltipBlock>
      )}
    </>
  )
}
