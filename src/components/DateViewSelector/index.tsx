import React from 'react'

import { MoveToIcon } from '@/assets/icons/MoveToIcon'
import { YearsMonthsView } from '@/components/YearsMonthsView'
import { changeDateMonth } from '@/utils/helpers/date'

import { IDateViewSelector } from './interface'
import { Container, Date, Left, Right } from './styled'

export const DateViewSelector = ({
  shownDate,
  setShownDate,
  setShowMonthYear,
  showMonthYear,
}: IDateViewSelector) => {
  const handleIconClick = (isNextMonth: boolean) => {
    return () => {
      setShownDate(changeDateMonth(shownDate, isNextMonth))
    }
  }

  return (
    <Container>
      <Left onClick={handleIconClick(false)}>
        <MoveToIcon />
      </Left>
      {showMonthYear ? (
        <YearsMonthsView
          shownDate={shownDate}
          setShownDate={setShownDate}
          setShowMonthYear={setShowMonthYear}
        />
      ) : (
        <Date onClick={() => setShowMonthYear(true)}>
          {shownDate?.format('MMMM YYYY')}
        </Date>
      )}

      <Right onClick={handleIconClick(true)}>
        <MoveToIcon />
      </Right>
    </Container>
  )
}
