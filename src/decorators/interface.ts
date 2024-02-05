import { ReactNode } from 'react'
import { Dayjs } from 'dayjs'

import { IObj } from '@/components/Calendar/interface'
import { IFilters } from '@/components/Filters/interface'

export interface IDecInputFilter extends IFilters {
  datePicker: boolean
  date: false | Dayjs
  onChooseDate: (date: Dayjs) => void
  onClickShowFilter: () => void
  rangeDays: IObj
  setFromDate: (date: Dayjs) => void
  setToDate: (date: Dayjs) => void
  children: ReactNode
  showFilter: boolean
}

export interface IGlobalConfig {
  children: ReactNode
}
