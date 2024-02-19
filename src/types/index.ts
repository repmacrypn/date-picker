import { Dayjs } from 'dayjs'

import {
  IHolidaysResponse,
  IRangeDateObj,
  ITaskInCalendar,
} from '@/components/Calendar/types'
import { WeekendStatusEnum } from '@/constants/enums'

export interface IUseDatePickerControl {
  rows: Array<ICalendarCell[]>
  rangeNoEmpty: string | undefined
  holiday: null | string
  taskValue: string
  showTooltip: boolean
  showTaskControl: boolean
  handleMouseEnter: (tooltip: string | undefined) => () => void
  handleMouseLeave: () => void
  removeTaskFromCalendar: (task: string) => () => void
  setTaskInCalendar: () => void
  setTaskValue: (task: string) => void
  changeStartWeekDay: (value: string) => () => void
  onClearRangeDays: () => void
  getEndDateForClasses: (rangeDays: IRangeDateObj | undefined) => string
  isStartDate: (
    rangeDays: IRangeDateObj | undefined,
    dateKey: string,
    endDate: string,
  ) => boolean
  isEndDate: (
    rangeDays: IRangeDateObj | undefined,
    dateKey: string,
    endDate: string,
  ) => boolean
  handleSelectDate: (value: Dayjs) => () => void
  isInRange: (date: Dayjs, startDate: string, endDate: string) => boolean
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
