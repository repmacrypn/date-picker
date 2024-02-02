import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.valueInPx.px20};
  justify-content: center;
  margin: ${({ theme }) => theme.valueInPx.px20} ${({ theme }) => theme.valueInPx.px0};
`

export const Container = styled.div`
  flex-shrink: 0;
  position: relative;
  width: ${({ theme }) => theme.valueInPx.px50};
  height: ${({ theme }) => theme.valueInPx.px28};
  z-index: 10;
  overflow-y: hidden;
  background-color: ${({ theme }) => theme.usedColors.white2};
  border: ${({ theme }) => theme.valueInPx.px2} solid;
  border-color: ${({ theme }) => theme.usedColors.black2};
  border-radius: ${({ theme }) => theme.valueInPx.px28};
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    cursor: pointer;
  }
`

export const ToggleItem = styled.div<{ $isActive: boolean }>`
  position: absolute;
  left: -2px;
  top: -1px;
  width: ${({ theme }) => theme.valueInPx.px27};
  height: ${({ theme }) => theme.valueInPx.px27};
  border: ${({ theme }) => theme.valueInPx.px2} solid;
  border-color: ${({ theme }) => theme.usedColors.black2};
  border-radius: 50%;
  transform: translateX(${({ $isActive }) => ($isActive ? '0px' : '23px')});
  transition: ${({ theme }) => theme.animation.transition};
`
