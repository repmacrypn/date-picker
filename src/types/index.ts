import { Dayjs } from 'dayjs'

import {
  IHolidaysResponse,
  IRangeDateObj,
  ITaskInCalendar,
} from '@/components/Calendar/types'

export enum WeekendStatusEnum {
  WithWeekEnds = 'with',
  WithoutWeekEnds = 'without',
}

export interface IUseCalendarPickerControl {
  onClickShowFilter: () => void
  rangeDays: IRangeDateObj
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
  setRangeDays?: (date: IRangeDateObj) => void
  date: Dayjs
  onChange: (date: Dayjs) => void
  setShowMonthYear: (value: boolean) => void
}

export interface IUsePickerControlProps {
  selectedDate: Dayjs
  onChangeRange?: (date: IRangeDateObj) => void
}

export interface ICalendarCell {
  text: string
  value: Dayjs
  isCurrentMonth?: boolean
  isWeekend: boolean
  isToday?: boolean
  isHoliday?: boolean
  holidayName?: string
}
