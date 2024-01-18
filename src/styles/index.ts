import { createGlobalStyle } from 'styled-components'

import openSansBold from '@/assets/fonts/OpenSans-Bold.ttf'
import openSansMedium from '@/assets/fonts/OpenSans-Medium.ttf'
import openSansRegular from '@/assets/fonts/OpenSans-Regular.ttf'
import openSansSemiBold from '@/assets/fonts/OpenSans-SemiBold.ttf'

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
    line-height: 1;
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

    @font-face {
      font-family: ${({ theme }) => theme.fontFamily[0]};
      src: url(${openSansRegular}) format('truetype');
      font-weight: ${({ theme }) => theme.fontWeight.normal};
      font-style: normal;
      font-display: auto;
    }
    @font-face {
      font-family: ${({ theme }) => theme.fontFamily[0]};
      src: url(${openSansMedium}) format('truetype');
      font-weight: ${({ theme }) => theme.fontWeight.medium};
      font-style: normal;
      font-display: auto;
    }
    @font-face {
      font-family: ${({ theme }) => theme.fontFamily[0]};
      src: url(${openSansSemiBold}) format('truetype');
      font-weight: ${({ theme }) => theme.fontWeight.semibold};
      font-style: normal;
      font-display: auto;
    }
    @font-face {
      font-family: ${({ theme }) => theme.fontFamily[0]};
      src: url(${openSansBold}) format('truetype');
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      font-style: normal;
      font-display: auto;
    }
  }
`
