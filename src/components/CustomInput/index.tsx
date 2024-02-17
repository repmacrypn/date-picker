import React, { ChangeEvent, KeyboardEvent, memo, useEffect, useState } from 'react'
import dayjs from 'dayjs'

import { CalendarIcon } from '@/assets/icons/CalendarIcon'
import { XIcon } from '@/assets/icons/XIcon'
import { FormatEnum } from '@/constants/dateFormats'

import { CalIcon, Container, DelIcon, InputContainer, InputItem } from './styled'
import { ICustomInput, InputEnum } from './types'

export const CustomInput = memo(
  ({
    type,
    onChooseDate,
    date,
    taskValue,
    setTaskValue,
    placeholder,
    setTaskInCalendar,
  }: ICustomInput) => {
    const [chooseDate, setChooseDate] = useState('')
    const ruleDateInput = type === InputEnum.Date

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
      if (ruleDateInput) {
        setChooseDate(event.target.value)
      }
      if (!ruleDateInput && setTaskValue) {
        setTaskValue(event.currentTarget.value)
      }
    }

    const onKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        if (ruleDateInput && onChooseDate) {
          onChooseDate(dayjs(chooseDate.trim()))
        }
        if (!ruleDateInput && setTaskValue && setTaskInCalendar) {
          setTaskInCalendar()
          setTaskValue('')
        }
      }
    }

    const onClickDel = () => {
      setChooseDate('')
    }

    useEffect(() => {
      if (date) {
        setChooseDate(date.format(FormatEnum.YearMonthDayFormat))
      } else {
        setChooseDate('')
      }
    }, [date, setChooseDate])

    return (
      <Container data-cy='inputItem' $ruleDateInput={ruleDateInput}>
        <InputContainer>
          {ruleDateInput ? (
            <>
              <CalIcon>
                <CalendarIcon />
              </CalIcon>
              <InputItem
                type='text'
                placeholder={placeholder}
                value={chooseDate}
                onChange={onChangeInput}
                onKeyUp={onKeyUp}
              />
              <DelIcon data-cy='delIcon' onClick={onClickDel}>
                <XIcon />
              </DelIcon>
            </>
          ) : (
            <InputItem
              data-cy='inputItemTask'
              type='text'
              placeholder={placeholder}
              value={taskValue}
              onChange={onChangeInput}
              onKeyUp={onKeyUp}
            />
          )}
        </InputContainer>
      </Container>
    )
  },
)
