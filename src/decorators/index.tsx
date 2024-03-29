import React, { ComponentType } from 'react'

import { FilterIcon } from '@/assets/icons/FilterIcon'
import { FilterItemIcon, InputFilterBlock } from '@/components/Calendar/styled'
import { CustomInput } from '@/components/CustomInput'
import { Filters } from '@/components/Filters'
import { InputEnum } from '@/constants/enums'
import { IDecInputFilter, IGlobalConfig } from '@/decorators/interfaces'

export const widthInputFilter = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: IDecInputFilter & P) => {
    const {
      onChooseDate,
      datePicker,
      date,
      onClickShowFilter,
      children,
      showFilter,
      statusWeekends,
      setStatusWeekends,
      setTasksDate,
    } = props

    if (datePicker) {
      return (
        <>
          <InputFilterBlock>
            <CustomInput
              data-testid='inputDatePicker'
              type={InputEnum.Date}
              date={date}
              onChooseDate={onChooseDate}
              placeholder='Choose Date (yyyy-mm-dd)'
            />
            <FilterItemIcon data-testid='filterIconBlock' onClick={onClickShowFilter}>
              <FilterIcon data-testid='filterIcon' />
            </FilterItemIcon>
          </InputFilterBlock>
          {children}
          {showFilter && (
            <Filters
              onClickShowFilter={onClickShowFilter}
              statusWeekends={statusWeekends}
              setStatusWeekends={setStatusWeekends}
              setTasksDate={setTasksDate}
            />
          )}
        </>
      )
    }

    return <Component {...props} />
  }
}

export const withGlobalConfig = <P extends object>(Component: ComponentType<P>) => {
  return (props: IGlobalConfig & P) => <Component {...props} />
}
