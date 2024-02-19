import { ITaskInCalendar } from '@/components/Calendar/types'
import { WeekendStatusEnum } from '@/constants/enums'

export interface IFilters {
  statusWeekends: WeekendStatusEnum
  setStatusWeekends: (status: WeekendStatusEnum) => void
  setTasksDate: (value: ITaskInCalendar) => void
  onClickShowFilter: () => void
}
