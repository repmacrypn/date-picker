import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ theme }) => theme.valueInPx.px32};
  width: 100%;
  position: relative;
`
export const InputItem = styled.input`
  width: 100%;
  height: 100%;
  text-align: center;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSize.xl};
  background-color: ${({ theme }) => theme.usedColors.gray1};
  border: 1px solid ${({ theme }) => theme.usedColors.gray4};
  border-radius: ${({ theme }) => theme.valueInPx.px8};
  transition: ${({ theme }) => theme.animation.transition};

  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.usedColors.black2};
  }
`

export const DelIcon = styled.div`
  width: ${({ theme }) => theme.valueInPx.px15};
  position: absolute;
  top: 25%;
  right: ${({ theme }) => theme.valueInPx.px5};
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`

export const CalIcon = styled.div`
  width: ${({ theme }) => theme.valueInPx.px15};
  position: absolute;
  top: 25%;
  left: ${({ theme }) => theme.valueInPx.px5};
`
