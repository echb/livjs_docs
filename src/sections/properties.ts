import { _inlineCodeCard } from '../components/inline_code'
import { _section } from '../components/section'
import { SECTIONS } from './sections'
import { shikiCode } from '#src/components/shiki.ts'
import { br, h2, li, span, ul } from '#src/tags.ts'

const examples = {
  properties: `id?: string; // id of the html element
children?: TChildren; // children of the html element
class?: string | string[] | (() => string | string[]);
style?: TStyle | (() => TStyle);   // style of the html element
event?: TEvent;   // any html event
attributes?: Record<string, string> | (() => Record<string, string>);   // attributes of the html element
cb?: (el: AnyWidgetElement) => void;   // callback function to access the element context, current workaround to missing features
items?: TSignal<T[]>;   // items a property to use builder
builder?: (e: T, index: number) => AnyWidgetElement | undefined;   // builder function to create children
`
}

export const _properties = _section([
  h2({
    children: 'Widget properties',
    id: SECTIONS.properties.id
  }),
  shikiCode(examples.properties),
  ul({
    style: {
      marginLeft: '0',
      gap: '10px',
      display: 'grid'
    },
    children: [
      li({
        children: [
          span({
            children: 'style'
          }),
          _inlineCodeCard('style?:Record<anyCssProperty, string>')
        ]
      }),
      li({
        children: [
          span({
            children: 'cb'
          }),
          _inlineCodeCard('?: ((el: AnyWidgetElement) => void)'),
          br(),
          span({
            children:
              'callback function to access the element context, current workaround to missing features'
          })
        ]
      }),
      li({
        children: [
          span({
            children: 'children'
          }),
          _inlineCodeCard('children?: AnyWidgetElement[]')
        ]
      }),
      li({
        children: [
          span({
            children: 'event'
          }),
          _inlineCodeCard(
            'event?:Record<anyEventProperty, callbackFunction: ((e: Event) => void)>'
          )
        ]
      }),
      li({
        children: [
          span({
            children: 'items'
          }),
          _inlineCodeCard('items?: TSignal<unknown[]>'),
          br(),
          span({
            children: '(Required to use builder)'
          })
        ]
      }),
      li({
        children: [
          span({
            children: 'builder'
          }),
          _inlineCodeCard(
            'builder?: ((e: T, index: number) => AnyWidgetElement'
          ),
          br(),
          span({
            children: ' (It requires the property'
          }),
          _inlineCodeCard('items'),
          span({
            children: 'to work correctly)'
          })
        ]
      })
    ]
  })
])
