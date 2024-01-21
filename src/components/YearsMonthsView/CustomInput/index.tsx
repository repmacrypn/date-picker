import React, { ChangeEvent, KeyboardEvent, memo, useEffect, useState } from 'react'
import dayjs from 'dayjs'

import { CalendarIcon } from '@/assets/icons/CalendarIcon'
import { XIcon } from '@/assets/icons/XIcon'

import { ICustomInput } from './interface'
import { CalIcon, Container, DelIcon, InputContainer, InputItem } from './styled'

export const CustomInput = memo(({ onChooseDate, date, placeholder }: ICustomInput) => {
  const [chooseDate, setChooseDate] = useState('')

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChooseDate(event.target.value)
  }

  const onKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onChooseDate(dayjs(chooseDate.trim()))
    }
  }

  const onClickDel = () => {
    setChooseDate('')
  }

  useEffect(() => {
    setChooseDate(date.format('YYYY-MM-DD'))
  }, [date])

  return (
    <Container>
      <InputContainer>
        <CalIcon>
          <CalendarIcon />
        </CalIcon>
        <InputItem
          type='text'
          placeholder={placeholder}
          value={chooseDate}
          onChange={onChange}
          onKeyUp={onKeyUp}
        />
        <DelIcon onClick={onClickDel}>
          <XIcon />
        </DelIcon>
      </InputContainer>
    </Container>
  )
})
