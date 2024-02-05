import { Dayjs } from 'dayjs'

import { IHolidaysResponse, IObj, ITaskInCalendar } from '@/components/Calendar/interface'

export enum WeekendStatusEnum {
  WithWeekEnds = 'with',
  WithoutWeekEnds = 'without',
}

export interface IUseCalendarPickerControl {
  onClickShowFilter: () => void
  rangeDays: IObj
  setFromDate: (date: Dayjs) => void
  setToDate: (date: Dayjs) => void
  showFilter: boolean
  statusWeekends: WeekendStatusEnum
  setStatusWeekends: (status: WeekendStatusEnum) => void
  setTasksDate: (value: ITaskInCalendar) => void
  onClickShowMonthYear: () => void
  showMonthYear: boolean
  startOfWeek: number
  setNumberStartOfWeek: (dayValue: string) => void
  holidays: IHolidaysResponse | undefined | null
  tasksDate?: ITaskInCalendar
  setRangeDays?: (date: IObj) => void
  date: Dayjs
  onChange: (date: Dayjs) => void
  setShowMonthYear: (value: boolean) => void
}

export interface IUsePickerControlProps {
  selectedDate: Dayjs
  onChangeRange?: (date: IObj) => void
}
