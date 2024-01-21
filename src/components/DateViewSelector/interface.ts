import { Dayjs } from 'dayjs'

export interface IDateViewSelector {
  shownDate: Dayjs
  onChange: (date: Dayjs) => void
  setShowMonthYear: () => void
}
