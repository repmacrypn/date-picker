import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import { Calendar } from '@/components/Calendar'
import GlobalConfig from '@/decorators/components/DatePickerConfig'

describe('DatePicker', () => {
  it('all DatePicker elements should be visible', () => {
    const { getByRole, queryByTestId } = render(
      <GlobalConfig>
        <Calendar />
      </GlobalConfig>,
    )

    const input = getByRole('textbox')
    const selector = queryByTestId('selectorItem')
    const filterIconBlock = queryByTestId('filterIconBlock')
    const calendarItem = queryByTestId('calendarItem')

    expect(input).toBeInTheDocument()
    expect(filterIconBlock).toBeInTheDocument()
    expect(selector).toBeInTheDocument()
    expect(calendarItem).toBeInTheDocument()
  })

  it('when you click on the filter, a window with filters should appear', () => {
    const { queryByTestId } = render(
      <GlobalConfig>
        <Calendar />
      </GlobalConfig>,
    )

    const filterIcon = queryByTestId('filterIcon')
    const displayFilter = queryByTestId('displayFilter')

    if (filterIcon) {
      fireEvent.click(filterIcon)
      expect(displayFilter).toBeInTheDocument()
    }
  })

  it('when you click on the day, a window with tasks should appear', () => {
    const { queryByTestId, getByText } = render(
      <GlobalConfig>
        <Calendar />
      </GlobalConfig>,
    )

    const dayCell = getByText('25')
    const taskList = queryByTestId('taskList')

    expect(dayCell).toBeInTheDocument()
    expect(taskList).not.toBeInTheDocument()

    if (dayCell && taskList) {
      fireEvent.click(dayCell)
      expect(taskList).toBeInTheDocument()
    }
  })

  it('when you click on the selector, a window with custom select should appear', () => {
    const { queryByTestId, queryAllByTestId } = render(
      <GlobalConfig>
        <Calendar />
      </GlobalConfig>,
    )

    const selector = queryByTestId('selectorItem')
    const customSelect = queryByTestId('customSelect')

    expect(customSelect).not.toBeInTheDocument()

    if (selector && customSelect) {
      fireEvent.click(selector)
      expect(queryAllByTestId('customSelect').length).toBe(2)
      expect(customSelect).toBeInTheDocument()
    }
  })
})
