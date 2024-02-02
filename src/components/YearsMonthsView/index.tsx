import React from 'react'

import { CustomSelect } from '@/components/CustomSelect'
import { SelectEnum } from '@/components/CustomSelect/interface'

import { IDisplayYearMonths } from './interface'
import { Wrapper } from './styled'

export const YearsMonthsView = ({
  shownDate,
  onChange,
  setShowMonthYear,
}: IDisplayYearMonths) => {
  const handleMonthSelect = (month: number) => {
    onChange(shownDate?.month(month))
    setShowMonthYear(false)
  }

  const handleYearSelect = (year: number) => {
    onChange(shownDate?.year(year))
  }

  return (
    <Wrapper>
      <CustomSelect
        type={SelectEnum.Year}
        selectedValue={shownDate?.year()}
        onSelect={handleYearSelect}
      />
      <CustomSelect
        type={SelectEnum.Month}
        selectedValue={shownDate?.month()}
        onSelect={handleMonthSelect}
      />
    </Wrapper>
  )
}
