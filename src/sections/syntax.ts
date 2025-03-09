import { inlineHighlight } from '#src/components/inline_highlight.ts'
import { h2, p, span } from '#src/tags.ts'
import { _section } from '../components/section'
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
