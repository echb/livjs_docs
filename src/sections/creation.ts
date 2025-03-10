import { inlineHighlight } from '#components/inline_highlight.ts'
import { _section } from '#components/section/section.ts'
import { shikiCode } from '#components/shiki.ts'
import { h2, p, span } from '#src/tags.ts'
import { SECTIONS } from './sections'

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
  h2({
    children: 'Creating a Livjs Application',
    id: SECTIONS.creation.id
  }),
  p({
    children: [
      span({
        children:
          'The App function is in fact a component. It search for an html element with the '
      }),
      inlineHighlight('id="app"'),
      ' property.'
    ]
  }),
  shikiCode(examples.basic),
  p({
    children: 'Also you can syntax sugar html tags!'
  }),
  shikiCode(examples.sugar_tags)
])
