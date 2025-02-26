import { widget } from 'livjs'
import { _section } from '../components/section'
import { _inlineCodeCard } from '../components/inline_code'

export const _syntax = _section([
  widget('h2', {
    children: 'Syntax'
  }),
  widget('p', {
    children:
      'There is no special syntax for Livjs!! plain JavaScript/Typescript is enough.'
  }),
  widget('span', {
    children: 'Everything is a function widget'
  }),
  _inlineCodeCard('widget()'),
  widget('span', {
    children: ". That's all. Great, isn't it?"
  })
])
