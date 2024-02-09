import { Dayjs } from 'dayjs'

import {
  IHolidaysResponse,
  IRangeDateObj,
  ITaskInCalendar,
} from '@/components/Calendar/types'
import { WeekendStatusEnum } from '@/types'

export interface IDatePicker {
  shownDate: Dayjs
  selectedDate?: Dayjs
  onChange?: (date: Dayjs) => void
  startOfWeek: number
  setStartOfWeek: (startOfWeek: string) => void
  holidays: IHolidaysResponse | undefined | null
  statusWeekends: WeekendStatusEnum
  setTasksDate?: (value: ITaskInCalendar) => void
  tasksDate?: ITaskInCalendar
  rangeDays?: IRangeDateObj
  setRangeDays?: (data: IRangeDateObj) => void
  isRange?: boolean
}
