import { type AnyWidgetElement, widget } from 'livjs'

export const _section = (children: AnyWidgetElement[]) =>
  widget('section', {
    style: {
      // display: 'grid',
      // gap: '16px',
      marginLeft: '16px',
      marginRight: '16px'
    },
    children: children
  })
