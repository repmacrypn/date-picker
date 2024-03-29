import React, { memo } from 'react'

import { DatePicker } from '@/components/DatePicker'
import { DateViewSelector } from '@/components/DateViewSelector'
import { YearsMonthsView } from '@/components/YearsMonthsView'
import GlobalConfig from '@/decorators/components/DatePickerConfig'
import InputFilter from '@/decorators/components/InputFilter'
import { useCalendarControl } from '@/hooks/useCalendarControl'

export const Calendar = memo(() => {
  const {
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
    setRangeDays,
    setNumberStartOfWeek,
    holidays,
    tasksDate,
    date,
    onChange,
  } = useCalendarControl()

  return (
    <GlobalConfig>
      <InputFilter
        datePicker
        date={date}
        onChooseDate={onChange}
        onClickShowFilter={onClickShowFilter}
        rangeDays={rangeDays}
        setFromDate={setFromDate}
        setToDate={setToDate}
        showFilter={showFilter}
        statusWeekends={statusWeekends}
        setStatusWeekends={setStatusWeekends}
        setTasksDate={setTasksDate}
      >
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
          isRange
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
      </InputFilter>
    </GlobalConfig>
  )
})
