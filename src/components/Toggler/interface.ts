import { WeekendStatusEnum } from '@/types'

export interface IToggler {
  statusWeekends: WeekendStatusEnum
  setStatusWeekends: (status: WeekendStatusEnum) => void
}
