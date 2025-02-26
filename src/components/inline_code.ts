import { widget } from 'livjs'
import { _css_border } from '../style'
import { _code } from './code'

export const _inlineCodeCard = (
  text: string,
  style?: Partial<Record<keyof CSSStyleDeclaration, string>>
) =>
  widget('span', {
    style: {
      marginLeft: '3px',
      marginRight: '3px',
      padding: '1px 3px',
      ..._css_border,
      ...style
    },
    children: [_code(text)]
  })
