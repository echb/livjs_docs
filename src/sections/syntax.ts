import { inlineHighlight } from '#components/inline_highlight/inline_highlight.ts'
import { _section } from '#components/section/section.ts'
import { h2, p, span } from '#src/tags.ts'
import { SECTIONS } from './sections'

export const _syntax = _section([
  h2({
    children: 'Syntax',
    id: SECTIONS.syntax.id
  }),
  p({
    children:
      'There is no special syntax for Livjs!! plain JavaScript/Typescript is enough.'
  }),
  span({
    children: 'Everything is a function widget'
  }),
  inlineHighlight('widget()'),
  span({
    children: ". That's all. Great, isn't it?"
  })
])
