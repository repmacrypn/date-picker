import React, { useRef } from 'react'

import { XIcon } from '@/assets/icons/XIcon'
import { Toggler } from '@/components/Toggler'

import { IFilters } from './interface'
import { CloseIcon, Wrapper } from './styled'

export const Filters = ({
  statusWeekends,
  setStatusWeekends,
  setTasksDate,
  onClickShowFilter,
}: IFilters) => {
  const modalRef = useRef(null)
  const onClickRemoveTaskHandler = () => {
    setTasksDate({})
    localStorage.removeItem('tasks')
  }

  return (
    <Wrapper data-testid='displayFilter'>
      <CloseIcon onClick={onClickShowFilter}>
        <XIcon />
      </CloseIcon>
      <Toggler statusWeekends={statusWeekends} setStatusWeekends={setStatusWeekends} />
      <div ref={modalRef} onClick={onClickRemoveTaskHandler}>
        Remove all tasks
      </div>
    </Wrapper>
  )
}
