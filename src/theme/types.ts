export interface IUsedColors {
  gray1: string
  gray2: string
  gray3: string
  gray4: string
  black1: string
  black2: string
  white1: string
  white2: string
  blue1: string
  blue2: string
  blue3: string
  red1: string
  green1: string
}

export interface ITheme {
  usedColors: IUsedColors
  fontFamily: string[]
  fontSize: {
    sm: string
    m: string
    l: string
    xl: string
    xxl: string
  }
  fontWeight: {
    normal: number
    medium: number
    semibold: number
    bold: number
  }
  valueInPx: {
    px0: string
    px1: string
    px2: string
    px5: string
    px8: string
    px10: string
    px16: string
    px20: string
    px22: string
    px25: string
    px26: string
    px30: string
    px34: string
    px40: string
    px45: string
    px50: string
    px60: string
    px70: string
    px100: string
    px125: string
    px150: string
    px200: string
    px250: string
    px300: string
    px320: string
    px370: string
    px400: string
    px480: string
  }
  animation: {
    transformActive: string
    transition: string
  }
  breakpoint: {
    px480: string
  }
}

export enum themeEnum {
  Light = 'light',
  Dark = 'dark',
}

export type LocalStorageKey = 'storedTheme'
