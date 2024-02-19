import { WeekendStatusEnum } from '@/constants/enums'

export interface IToggler {
  statusWeekends: WeekendStatusEnum
  setStatusWeekends: (status: WeekendStatusEnum) => void
}
