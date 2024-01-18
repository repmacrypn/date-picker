import { Dayjs } from 'dayjs'

export interface ICalendar {
  selectedDate: Dayjs
  onChange: (newDate: Dayjs) => void
}
