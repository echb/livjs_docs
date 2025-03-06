import { _card } from '#components/card.ts'
import { _inlineCodeCard } from '#components/inline_code.ts'
import { _code } from '#components/code.ts'
import { _section } from '#components/section.ts'
import { SECTIONS } from './sections'
import { shikiCode } from '#src/components/shiki.ts'
import { b, div, h2, p, span } from '#src/tags.ts'

const examples = {
  basic: `import { App, widget } from 'livjs'

App({
  children: [
    widget('div', {
      children: 'Hello World!'
    })
  ]
})
`,
  sugar_tags: `import { App, tags } from 'livjs'

const { div } = tags

App({
  children: [
    div({
      children: 'Hello World!'
    })
  ]
})
`
}

export const _creation = _section([
  div({
    children: 'Hello World!'
  }),
  h2({
    children: 'Creating a Livjs Application',
    id: SECTIONS.creation.id
  }),
  p({
    children: [
      span({
        children:
          'The App function is in fact a component. It search for an html element with the'
      }),
      _inlineCodeCard('id="app"'),
      b({
        children: 'property.'
      })
    ]
  }),
  shikiCode(examples.basic),
  p({
    children: 'Also you can syntax sugar html tags!'
  }),
  shikiCode(examples.sugar_tags)
])
