import { globalStyle } from '@vanilla-extract/css'
import { globalTheme } from './theme.css'

//// MARK: global
globalStyle('html, body', {
  margin: 0,
  backgroundColor: globalTheme.color.grey900
})
globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  fontFamily: '"Geist", serif'
})

globalStyle('*', {
  color: ' #ffffffde',
  // font: 'inherit',
  // fontFamily: '"Geist", serif',
  // font-optical-sizing:' auto',
  fontWeight: '400',
  fontStyle: 'normal',
  boxSizing: 'border-box'
  // margin: 0,
  // padding: 0
})
globalStyle('html', {
  colorScheme: 'dark lightingColor',
  hangingPunctuation: 'first lastlightingColor',
  scrollBehavior: 'smooth'
})
globalStyle('html', {
  minHeight: '100vh'
})
globalStyle('img, picture, svg, video', {
  display: 'block',
  maxWidth: '100%'
})
globalStyle('h1, h2, h3, h4, h5, h6', {
  textWrap: 'balance'
})
globalStyle('p', {
  // maxWidth: '75ch',
  textWrap: 'pretty'
})
