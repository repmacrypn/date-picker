import React from 'react'
import { Dayjs } from 'dayjs'

export interface IDisplayYearMonths {
  shownDate: Dayjs
  setShownDate: React.Dispatch<React.SetStateAction<Dayjs>>
  setShowMonthYear: (value: boolean) => void
}
