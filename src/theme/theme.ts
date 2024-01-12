import { ITheme, IUsedColors } from '@/theme/types'

export const usedColors: IUsedColors = {
  gray1: 'rgba(225, 225, 225, 1)',
  gray2: 'rgba(221, 221, 221, 1)',
  gray3: 'rgba(187, 187, 187, 1)',
  gray4: 'rgba(170, 170, 170, 1)',
  black1: 'rgba(0, 0, 0, 1)',
  black2: 'rgba(51, 51, 51, 1)',
  white1: 'rgba(255, 255, 255, 1)',
  white2: 'rgba(241, 241, 241, 1)',
  blue1: 'rgba(47, 128, 237, 1)',
  blue2: 'rgba(47, 128, 237, 0.6)',
  blue3: 'rgba(47, 128, 237, 0.1)',
  red1: 'rgba(231, 79, 79, 1)',
  green1: 'rgba(57, 234, 24, 1)',
}

export const baseTheme: ITheme = {
  usedColors: { ...usedColors },
  fontFamily: ['Open Sans'],
  fontSize: {
    sm: '12px',
    m: '13px',
    l: '14px',
    xl: '15px',
    xxl: '20px',
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  valueInPx: {
    px0: '0',
    px1: '1px',
    px2: '2px',
    px5: '5px',
    px8: '8px',
    px10: '10px',
    px16: '16px',
    px20: '20px',
    px22: '22px',
    px25: '25px',
    px30: '30px',
    px34: '34px',
    px40: '40px',
    px45: '45px',
    px50: '50px',
    px60: '60px',
    px70: '70px',
    px100: '100px',
    px125: '125px',
    px150: '150px',
    px200: '200px',
    px250: '250px',
    px300: '300px',
    px320: '320px',
    px370: '370px',
    px400: '400px',
    px480: '480px',
  },
  animation: {
    transformActive: 'scale(0.95)',
    transition: 'all 0.3s ease',
  },
  breakpoint: {
    px480: '480px',
  },
}
