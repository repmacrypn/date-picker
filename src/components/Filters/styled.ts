import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: ${({ theme }) => theme.valueInPx.px25};
  top: ${({ theme }) => theme.valueInPx.px15};
  width: ${({ theme }) => theme.valueInPx.px250};
  padding-bottom: ${({ theme }) => theme.valueInPx.px20};
  background-color: ${({ theme }) => theme.usedColors.white2};
  border: 1px solid ${({ theme }) => theme.usedColors.black2};
  border-radius: ${({ theme }) => theme.valueInPx.px8};
`

export const CloseIcon = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.valueInPx.px5};
  top: ${({ theme }) => theme.valueInPx.px5};
  cursor: pointer;
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    transform: scale(1.2);
  }
`
