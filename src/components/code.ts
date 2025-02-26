import { widget } from 'livjs'

export const _code = (
  text: string,
  style: Partial<Record<keyof CSSStyleDeclaration, string>> = {}
) =>
  widget('code', {
    children: text,
    style: {
      fontFamily: 'monospace',
      // fontSize: '1rem',
      whiteSpace: 'pre-wrap',
      ...style
    }
  })
