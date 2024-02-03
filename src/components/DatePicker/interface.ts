import { Dayjs } from 'dayjs'

import { IHolidaysResponse, IObj, ITaskInCalendar } from '@/components/Calendar/interface'
import { WeekendStatusEnum } from '@/types'

export interface IDatePicker {
  shownDate: Dayjs
  selectedDate: Dayjs
  onChange?: (date: Dayjs) => void
  startOfWeek: number
  setStartOfWeek: (startOfWeek: string) => void
  holidays: IHolidaysResponse | undefined | null
  statusWeekends: WeekendStatusEnum
  setTasksDate: (value: ITaskInCalendar) => void
  tasksDate: ITaskInCalendar
  rangeDays?: IObj
  setRangeDays?: (data: IObj) => void
}
