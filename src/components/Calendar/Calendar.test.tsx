import React from 'react'
import { render } from '@testing-library/react'
import dayjs from 'dayjs'

import { Theme } from '@/components/Theme'

import { DateViewSelector } from '../DateViewSelector'

describe('DatePicker', () => {
  const mockChangeDate = jest.fn()
  const mockClickDate = jest.fn()
  const date = dayjs()

  it('1', () => {
    const { queryByTestId } = render(
      <Theme>
        <DateViewSelector
          shownDate={date}
          onChange={mockChangeDate}
          setShowMonthYear={mockClickDate}
        />
      </Theme>,
    )

    const input = queryByTestId('SelectorItem')

    expect(input).toBeInTheDocument()
  })
})
