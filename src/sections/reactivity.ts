import { widget } from 'livjs'
import { _card } from '../components/card'
import { _code } from '../components/code'
import { _inlineCodeCard } from '../components/inline_code'
import { _section } from '../components/section'

export const _reactivity = _section([
  widget('h2', {
    children: 'Reactivity'
  }),
  widget('p', {
    children: [
      'Reactivity is a core concept of Livjs. It is based on signals and effects. Signals are reactive values that can be used to create reactive UIs. Effects are functions that can be used to perform side effects, such as fetching data from an API or updating the DOM. Signals and effects are used together to create a reactive system that can automatically update the UI when the underlying data changes.',
      widget('h3', {
        children: 'Declaring Reactive State'
      }),
      _inlineCodeCard('signal()', { margin: '0' }),
      widget('br', {}),
      widget('span', {
        children:
          'Signals are reactive values that can be used to create reactive UIs. They are similar to Reactive Variables in React.'
      }),
      widget('br', {}),
      widget('br', {}),
      _inlineCodeCard('effect()', { margin: '0' }),
      widget('br', {}),
      widget('span', {
        children:
          'Effects are functions that can be used to perform side effects, such as fetching data from an API or updating the DOM. They are similar to Reactive Functions in React.'
      }),
      widget('br', {}),
      widget('br', {}),
      _card(
        _code(
          `import { signal, effect } from 'livjs'
              
const count = signal(0)`,
          {
            color: 'black'
          }
        ),
        {
          backgroundColor: 'white'
        }
      ),
      widget('br', {}),
      _inlineCodeCard('signal()', { margin: '0' }),
      widget('span', {
        children:
          ' takes the argument and returns it wrapped within a ref object with a'
      }),
      _inlineCodeCard(' .value '),
      widget('p', {
        children: 'property:'
      })
    ]
  })
])
