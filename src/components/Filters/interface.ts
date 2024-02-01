import { WeekendStatusEnum } from '@/types'

export interface IFilters {
  statusWeekends: WeekendStatusEnum
  setStatusWeekends: (status: WeekendStatusEnum) => void
}
