import { widget } from 'livjs'
import { _card } from '#components/card.ts'
import { _inlineCodeCard } from '#components/inline_code.ts'
import { _code } from '#components/code.ts'
import { _section } from '#components/section.ts'
import { SECTIONS } from './sections'
import { shikiCode } from '#src/components/shiki.ts'

const examples = {
  basic: `import { type AnyWidgetElement, App, widget } from 'livjs'

App({
  children: [
    widget('div', {
      text: 'Hello World!'
    })
  ]
})
`
}

export const _creation = _section([
  widget('h2', {
    children: 'Creating a Livjs Application',
    id: SECTIONS.creation.id
  }),
  widget('p', {
    children: [
      widget('span', {
        children:
          'The App function is in fact a component. It search for an html element with the'
      }),
      _inlineCodeCard('id="app"'),
      widget('b', {
        children: 'property.'
      })
    ]
  }),
  shikiCode(examples.basic)
])
