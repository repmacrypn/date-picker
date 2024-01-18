import React, { useEffect, useState } from 'react'

import { MonthSelector } from '@/components/YearsMonthsView/MonthSelector'
import { YearSelector } from '@/components/YearsMonthsView/YearSelector'

import { IDisplayYearMonths } from './interface'
import { Wrapper } from './styled'

interface IYearMonthData {
  year?: number
  month?: number
}

export const YearsMonthsView = ({
  shownDate,
  setShownDate,
  setShowMonthYear,
}: IDisplayYearMonths) => {
  const [yearMonthData, setYearMonthData] = useState<IYearMonthData | null>(null)
  const handleMonthSelect = (month: number) => {
    if (month) {
      setYearMonthData((prev) => ({
        ...prev,
        month,
      }))
    }
  }

  const handleYearSelect = (year: number) => {
    if (year) {
      setYearMonthData((prev) => ({
        ...prev,
        year,
      }))
    }
  }

  useEffect(() => {
    if (yearMonthData?.year && yearMonthData.month) {
      setShownDate(shownDate?.month(yearMonthData.month))
      setShownDate(shownDate?.year(yearMonthData?.year))
      setShowMonthYear(false)
    }
  }, [yearMonthData, setShownDate, setShowMonthYear, shownDate])

  useEffect(() => {
    setYearMonthData(null)
  }, [])

  return (
    <Wrapper>
      <MonthSelector selectedMonth={shownDate?.month()} onSelect={handleMonthSelect} />
      <YearSelector selectedYear={shownDate?.year()} onSelect={handleYearSelect} />
    </Wrapper>
  )
}
