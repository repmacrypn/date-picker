import React, { memo, useCallback } from 'react'

import { MoveToIcon } from '@/assets/icons/MoveToIcon'
import { changeDateMonth } from '@/utils/helpers/date'

import { IDateViewSelector } from './interface'
import { Container, Date, Left, Right } from './styled'

export const DateViewSelector = memo(
  ({ shownDate, onChange, setShowMonthYear }: IDateViewSelector) => {
    const handleIconClick = useCallback(
      (isNextMonth: boolean) => {
        return () => {
          onChange(changeDateMonth(shownDate, isNextMonth))
        }
      },
      [onChange, shownDate],
    )

    return (
      <Container data-testid='selectorItem'>
        <Left data-cy='dateInSelector' onClick={handleIconClick(false)}>
          <MoveToIcon />
        </Left>
        <Date onClick={setShowMonthYear}>{shownDate?.format('MMMM YYYY')}</Date>
        <Right data-cy='nextIcon' onClick={handleIconClick(true)}>
          <MoveToIcon />
        </Right>
      </Container>
    )
  },
)
