import React from 'react'
import { render } from '@testing-library/react'

import { Calendar } from '@/components/Calendar'
import GlobalPicker from '@/decorators/components/DatePickerConfig'

describe('RangePicker', () => {
  it('all RangePicker elements should be visible', () => {
    const { getByRole, queryByTestId } = render(
      <GlobalPicker>
        <Calendar />
      </GlobalPicker>,
    )

    const input = getByRole('textbox')
    const selector = queryByTestId('selectorItem')
    const calendarItem = queryByTestId('calendarItem')

    expect(input).toBeInTheDocument()
    expect(selector).toBeInTheDocument()
    expect(calendarItem).toBeInTheDocument()
  })
})
