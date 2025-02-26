import { widget } from 'livjs'
import { _inlineCodeCard } from '../components/inline_code'
import { _section } from '../components/section'
import { SECTIONS } from './sections'

export const _properties = _section([
  widget('h2', {
    children: 'Widget properties',
    id: SECTIONS.properties.id
  }),
  widget('ul', {
    style: {
      marginLeft: '0',
      gap: '10px',
      display: 'grid'
    },
    children: [
      widget('li', {
        children: [
          widget('span', {
            children: 'text'
          }),
          _inlineCodeCard('text?: string')
        ]
      }),
      widget('li', {
        children: [
          widget('span', {
            children: 'style'
          }),
          _inlineCodeCard('style?:Record<anyCssProperty, string>')
        ]
      }),
      widget('li', {
        children: [
          widget('span', {
            children: 'cb'
          }),
          _inlineCodeCard('?: ((el: AnyWidgetElement) => void)'),
          widget('br', {}),
          widget('span', {
            children:
              'callback function to access the element context, current workaround to missing features'
          })
        ]
      }),
      widget('li', {
        children: [
          widget('span', {
            children: 'children'
          }),
          _inlineCodeCard('children?: AnyWidgetElement[]')
        ]
      }),
      widget('li', {
        children: [
          widget('span', {
            children: 'event'
          }),
          _inlineCodeCard(
            'event?:Record<anyEventProperty, callbackFunction: ((e: Event) => void)>'
          )
        ]
      }),
      widget('li', {
        children: [
          widget('span', {
            children: 'items'
          }),
          _inlineCodeCard('items?: TSignal<unknown[]>'),
          widget('br', {}),
          widget('span', {
            children: '(Required to use builder)'
          })
        ]
      }),
      widget('li', {
        children: [
          widget('span', {
            children: 'builder'
          }),
          _inlineCodeCard(
            'builder?: ((e: T, index: number) => AnyWidgetElement'
          ),
          widget('br', {}),
          widget('span', {
            children: ' (It requires the property'
          }),
          _inlineCodeCard('items'),
          widget('span', {
            children: 'to work correctly)'
          })
        ]
      })
    ]
  })
])
