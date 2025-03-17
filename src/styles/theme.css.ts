import { createGlobalTheme } from '@vanilla-extract/css'
export const globalTheme = createGlobalTheme(':root', {
  color: {
    //// MARK: primary
    primary25: '#C8FFC8',
    primary100: '#96FF96',
    primary200: '#32FF32',
    primary300: '#00FF64',
    primary400: '#00FF32',
    primary500: '#00FF00',
    primary600: '#00C800',
    primary700: '#009600',
    primary800: '#006400',
    primary900: '#003200',
    //// MARK: secondary
    secondary25: '#FFF5BE',
    secondary100: '#FFEB96',
    secondary200: '#FFE16E',
    secondary300: '#FFD755',
    secondary400: '#FFD24B',
    secondary500: '#FED049',
    secondary600: '#DCB43C',
    secondary700: '#B49632',
    secondary800: '#8C7828',
    secondary900: '#5A5019',
    //// MARK: grey
    grey25: '#f0f0f0',
    grey100: '#dcdcdc',
    grey200: '#bebebe',
    grey300: '#a0a0a0',
    grey400: '#828282',
    grey500: '#646464',
    grey600: '#464646',
    grey700: '#282828',
    grey800: '#1e1e1e',
    grey900: '#1a1a1a',
    //// MARK: black
    black: '#000000',
    //// MARK: white
    white: '#ffffff'
  },
  spacing: {
    s0: '0px',
    s4: '4px',
    s6: '6px',
    s8: '8px',
    s12: '12px',
    s16: '16px',
    s20: '20px',
    s24: '24px',
    s28: '28px',
    s32: '32px',
    s36: '36px',
    s40: '40px'
  }
})
