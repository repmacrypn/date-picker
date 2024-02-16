import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
  }

  * {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: ${({ theme }) => theme.fontWeight.normal};

    ul {
      list-style: none;
    }

    &,
    &::before,
    &::after {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    ::-webkit-scrollbar {
      width: ${({ theme }) => theme.valueInPx.px2};
    }

    ::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.usedColors.black1};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.usedColors.black1};
      border-radius: ${({ theme }) => theme.valueInPx.px8};
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: ${({ theme }) => theme.usedColors.gray1};
    }

    :active {
        outline: none;
    }

    input:focus, input:focus-visible {
      outline: none;
      transition: ${({ theme }) => theme.animation.transition};
    }
  }
`
