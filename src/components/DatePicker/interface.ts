import { Dayjs } from 'dayjs'

export interface IDatePicker {
  shownDate: Dayjs
  selectedDate: Dayjs
  onChange: (newDate: Dayjs) => void
}
