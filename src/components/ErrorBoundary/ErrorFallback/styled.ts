import styled from 'styled-components'

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: ${({ theme }) => theme.fontFamily[0]};
`

export const Button = styled.button`
  display: block;
  width: auto;
  padding: ${({ theme }) => theme.valueInPx.px10};
  margin: ${({ theme }) => theme.valueInPx.px20} auto 0;
  border-radius: ${({ theme }) => theme.valueInPx.px8};
  border: none;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.usedColors.white1};
  background-color: ${({ theme }) => theme.usedColors.blue1};
  text-align: center;
  will-change: transform;
  font-family: ${({ theme }) => theme.fontFamily[0]}, sans-serif;
  transition: ${({ theme }) => theme.animation.transition};

  &:active {
    transform: ${({ theme }) => theme.animation.transformActive};
    border-radius: ${({ theme }) => theme.valueInPx.px25};
  }

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.4;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.px480}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    border-radius: ${({ theme }) => theme.valueInPx.px10};
  }
`
