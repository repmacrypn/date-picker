import React from 'react'

import { DatePicker } from '@/components/DatePicker'
import { DateViewSelector } from '@/components/DateViewSelector'
import { YearsMonthsView } from '@/components/YearsMonthsView'
import GlobalConfig from '@/decorators/components/DatePickerConfig'
import InputFilter from '@/decorators/components/InputFilter'
import { useCalendarControl } from '@/hooks/useCalendarControl'

export const RangePicker = () => {
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
    setShowMonthYear,
    startOfWeek,
    setNumberStartOfWeek,
    holidays,
    setRangeDays,
    date,
    onChange,
  } = useCalendarControl()

  return (
    <GlobalConfig>
      <InputFilter
        datePicker={false}
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
            setShowMonthYear={setShowMonthYear}
          />
        )}
        <DatePicker
          shownDate={date}
          startOfWeek={startOfWeek}
          setStartOfWeek={setNumberStartOfWeek}
          holidays={holidays}
          statusWeekends={statusWeekends}
          rangeDays={rangeDays}
          setRangeDays={setRangeDays}
        />
      </InputFilter>
    </GlobalConfig>
  )
}
