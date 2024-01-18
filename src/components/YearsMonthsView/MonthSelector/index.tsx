import React from 'react'

import { IMonthSelector } from './interface'
import { SelectorDropdown, SelectorDropdownItem } from './styled'

export const MonthSelector = ({ selectedMonth, onSelect }: IMonthSelector) => {
  const handleSelect = (month: number) => {
    onSelect(month)
  }

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  return (
    <SelectorDropdown>
      {months.map((month, index) => (
        <SelectorDropdownItem
          key={month}
          selected={selectedMonth === index}
          onClick={() => handleSelect(index)}
        >
          {month}
        </SelectorDropdownItem>
      ))}
    </SelectorDropdown>
  )
}
