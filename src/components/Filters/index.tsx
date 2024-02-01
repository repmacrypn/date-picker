import React from 'react'

import { Toggler } from '@/components/Toggler'

import { IFilters } from './interface'
import { Wrapper } from './styled'

export const Filters = ({ statusWeekends, setStatusWeekends }: IFilters) => {
  return (
    <Wrapper>
      <Toggler statusWeekends={statusWeekends} setStatusWeekends={setStatusWeekends} />
    </Wrapper>
  )
}
