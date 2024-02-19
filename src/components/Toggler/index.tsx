import React, { memo, useCallback } from 'react'

import { WeekendStatusEnum } from '@/constants/enums'

import { IToggler } from './interface'
import { Container, ToggleItem, Wrapper } from './styled'

export const Toggler = memo(({ statusWeekends, setStatusWeekends }: IToggler) => {
  const handleToggleChange = useCallback(() => {
    const currentStatus =
      statusWeekends === WeekendStatusEnum.WithWeekEnds
        ? WeekendStatusEnum.WithoutWeekEnds
        : WeekendStatusEnum.WithWeekEnds

    setStatusWeekends(currentStatus)
  }, [statusWeekends, setStatusWeekends])

  return (
    <Wrapper>
      {statusWeekends === WeekendStatusEnum.WithWeekEnds
        ? 'Show the weekends'
        : 'Don`t Show...'}
      <Container onClick={handleToggleChange}>
        <ToggleItem $isActive={statusWeekends !== WeekendStatusEnum.WithWeekEnds} />
      </Container>
    </Wrapper>
  )
})
