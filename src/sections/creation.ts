import { widget } from 'livjs'
import { _card } from '../components/card'
import { _inlineCodeCard } from '../components/inline_code'
import { _code } from '../components/code'
import { _section } from '../components/section'

export const _creation = _section([
  widget('h2', {
    children: 'Creating a Livjs Application'
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
  _card(
    _code(
      `import { type AnyWidgetElement, App, widget } from 'livjs'

App({
children: [
  widget('div', {
  text: 'Hello World!'
  })
]
})
`,
      {
        color: 'black'
      }
    ),
    {
      backgroundColor: 'white'
    }
  )
])
