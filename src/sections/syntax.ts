import { _section } from '../components/section'
import { _inlineCodeCard } from '../components/inline_code'
import { SECTIONS } from './sections'
import { h2, p, span } from '#src/tags.ts'
import { inlineHighlight } from '#src/components/inline_highlight.ts'

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
