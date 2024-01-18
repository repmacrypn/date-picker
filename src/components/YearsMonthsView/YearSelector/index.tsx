import React from 'react'

import { IYearSelector } from './interface'
import { SelectorDropdown, SelectorDropdownItem } from './styled'

export const YearSelector = ({ selectedYear, onSelect }: IYearSelector) => {
  const handleSelect = (year: number) => {
    onSelect(year)
  }

  const years = range(1980, 2101)

  function range(start: number, end: number) {
    const result = []

    for (let i = start; i <= end; i++) {
      result.push(i)
    }

    return result
  }

  return (
    <SelectorDropdown>
      {years.map((year) => (
        <SelectorDropdownItem
          key={year}
          selected={selectedYear === year}
          onClick={() => handleSelect(year)}
        >
          {year}
        </SelectorDropdownItem>
      ))}
    </SelectorDropdown>
  )
}
