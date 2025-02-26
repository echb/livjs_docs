import { type AnyWidgetElement, widget } from 'livjs'
import { _css_border } from '../style'

export const _card = (
  child: AnyWidgetElement,
  style: Partial<Record<keyof CSSStyleDeclaration, string>> = {}
) =>
  widget('div', {
    style: {
      ..._css_border,
      display: 'flex',
      padding: '1rem',
      ...style
    },
    children: [child]
  })
