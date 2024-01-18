import React from 'react'
import { Dayjs } from 'dayjs'

export interface IDateViewSelector {
  shownDate: Dayjs
  setShownDate: React.Dispatch<React.SetStateAction<Dayjs>>
  showMonthYear: boolean
  setShowMonthYear: (value: boolean) => void
}
