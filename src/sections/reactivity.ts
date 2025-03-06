import { widget } from 'livjs'
import { _card } from '#components/card.ts'
import { _code } from '#components/code.ts'
import { _inlineCodeCard } from '#components/inline_code.ts'
import { _section } from '#components/section.ts'
import { shikiCode } from '#components/shiki.ts'
import { SECTIONS } from './sections'
import { br, h2, h3, p, span } from '#src/tags.ts'
import { inlineHighlight } from '#src/components/inline_highlight.ts'

const examples = {
  effect: `import { signal, effect } from 'livjs'

const count = signal(0)

effect(() => {
  console.log(count.value) // whenever count changes, this effect will run
})
`
}

export const _reactivity = _section([
  h2({
    children: 'Reactivity',
    id: SECTIONS.reactivity.id
  }),
  widget('p', {
    children: [
      'Reactivity is a core concept of Livjs. It is based on signals and effects. Signals are reactive values that can be used to create reactive UIs. Effects are functions that can be used to perform side effects, such as fetching data from an API or updating the DOM. Signals and effects are used together to create a reactive system that can automatically update the UI when the underlying data changes.',
      h3({
        children: 'Declaring Reactive State'
      }),
      h3({
        children: 'signal'
      }),
      inlineHighlight('signal()'),
      br(),
      span({
        children:
          'Signals are reactive values that can be used to create reactive UIs. They are similar to Reactive Variables in React.'
      }),
      br(),
      br(),
      inlineHighlight('effect()'),
      br(),
      span({
        children:
          'Effects are functions that can be used to perform side effects, such as fetching data from an API or updating the DOM. They are similar to Reactive Functions in React.'
      }),
      br(),
      br(),
      shikiCode(examples.effect),
      br(),
      inlineHighlight('signal()'),
      span({
        children:
          ' takes the argument and returns it wrapped within a ref object with a'
      }),
      inlineHighlight(' .value '),
      p({
        children: 'property:'
      })
    ]
  })
])
