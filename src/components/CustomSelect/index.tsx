import React, { useState } from 'react'

import { ICustomSelect, SelectEnum } from '@/components/CustomSelect/types'
import { months } from '@/constants/months'
import { range } from '@/utils/helpers/date'

import { ArrowIcon, Container, Option, OptionsContainer, SelectedOption } from './styled'

export const CustomSelect = ({ selectedValue, onSelect, type }: ICustomSelect) => {
  const [isMonthOpen, setIsMonthOpen] = useState(false)
  const [isYearOpen, setIsYearOpen] = useState(false)
  const typeRule = type === SelectEnum.Month
  const isOpenSelect = typeRule ? isMonthOpen : isYearOpen

  const handleSelectM = (month: number) => () => {
    onSelect(month)
  }

  const selectValue = typeRule ? months[selectedValue] : selectedValue

  const handleSelectY = (year: number) => () => {
    onSelect(year)
  }

  const years = range(1995, 2050)

  const onClickOpenSelect = () => {
    if (typeRule) {
      setIsMonthOpen((prev) => !prev)
    } else {
      setIsYearOpen((prev) => !prev)
    }
  }

  return (
    <Container>
      <SelectedOption onClick={onClickOpenSelect}>
        {selectValue}
        <ArrowIcon $open={isOpenSelect} />
      </SelectedOption>
      <OptionsContainer $open={isOpenSelect}>
        {typeRule
          ? months.map((month, index) => (
              <Option key={month} onClick={handleSelectM(index)}>
                {month}
              </Option>
            ))
          : years.map((year) => (
              <Option
                key={year}
                $selected={selectedValue === year}
                onClick={handleSelectY(year)}
              >
                {year}
              </Option>
            ))}
      </OptionsContainer>
    </Container>
  )
}
