import { Dayjs } from 'dayjs'

export interface ICustomInput {
  date: Dayjs
  onChooseDate: (value: Dayjs) => void
  placeholder: string
}
