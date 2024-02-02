import { ITaskInCalendar } from '@/components/Calendar/interface'
import { WeekendStatusEnum } from '@/types'

export interface IFilters {
  statusWeekends: WeekendStatusEnum
  setStatusWeekends: (status: WeekendStatusEnum) => void
  setTasksDate: (value: ITaskInCalendar) => void
  onClickShowFilter: () => void
}
