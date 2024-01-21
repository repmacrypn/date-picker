import { Dayjs } from 'dayjs'

export interface IDisplayYearMonths {
  shownDate: Dayjs
  onChange: (date: Dayjs) => void
  setShowMonthYear: (value: boolean) => void
}
