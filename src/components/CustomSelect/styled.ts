import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const SelectedOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.valueInPx.px7};
  background-color: ${({ theme }) => theme.usedColors.gray1};
  border: 1px solid ${({ theme }) => theme.usedColors.gray4};
  border-radius: ${({ theme }) => theme.valueInPx.px8};
  transition: ${({ theme }) => theme.animation.transition};

  &:hover,
  &:focus {
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.usedColors.black2};
  }
`

export const ArrowIcon = styled.div<{ $open: boolean }>`
  width: ${({ theme }) => theme.valueInPx.px0};
  height: ${({ theme }) => theme.valueInPx.px0};
  border-top: ${({ theme }) => theme.valueInPx.px5} solid
    ${({ theme }) => theme.usedColors.gray5};
  border-left: ${({ theme }) => theme.valueInPx.px5} solid transparent;
  border-right: ${({ theme }) => theme.valueInPx.px5} solid transparent;
  transition: ${({ theme }) => theme.animation.transition};
  transform: ${({ $open }) => ($open ? 'rotate(180deg)' : 'rotate(0deg)')};
`

export const OptionsContainer = styled.div<{ $open: boolean }>`
  position: absolute;
  top: ${({ theme }) => theme.valueInPx.px50};
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-height: ${({ theme }) => theme.valueInPx.px150};
  z-index: 5;
  overflow-y: auto;
  color: ${({ theme }) => theme.usedColors.black2};
  background-color: ${({ theme }) => theme.usedColors.white2};
  border-radius: 0 0 5px 5px;
  box-shadow: 0 2px 4px ${({ theme }) => theme.usedColors.white3};
  display: ${({ $open }) => ($open ? 'block' : 'none')};
  transition: ${({ theme }) => theme.animation.transition};

  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.valueInPx.px5};
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.usedColors.white1};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.usedColors.gray2};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.usedColors.gray4};
  }
`

export const Option = styled.div<{ $selected?: boolean }>`
  padding: ${({ theme }) => theme.valueInPx.px10};
  background: ${({ $selected }) =>
    $selected ? ({ theme }) => theme.usedColors.gray1 : 'none'};

  &:hover {
    background-color: ${({ theme }) => theme.usedColors.gray1};
  }
`
