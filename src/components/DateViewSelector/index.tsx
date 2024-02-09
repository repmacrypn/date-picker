import React, { memo } from 'react'

import { MoveToIcon } from '@/assets/icons/MoveToIcon'
import { changeDateMonth } from '@/utils/helpers/date'

import { IDateViewSelector } from './interface'
import { Container, Date, Left, Right } from './styled'

export const DateViewSelector = memo(
  ({ shownDate, onChange, setShowMonthYear }: IDateViewSelector) => {
    const handleIconClick = (isNextMonth: boolean) => {
      return () => {
        onChange(changeDateMonth(shownDate, isNextMonth))
      }
    }

    return (
      <Container data-testid='SelectorItem'>
        <Left onClick={handleIconClick(false)}>
          <MoveToIcon />
        </Left>
        <Date onClick={setShowMonthYear}>{shownDate?.format('MMMM YYYY')}</Date>
        <Right onClick={handleIconClick(true)}>
          <MoveToIcon />
        </Right>
      </Container>
    )
  },
)
