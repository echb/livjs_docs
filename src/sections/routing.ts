import { widget } from 'livjs'
import { _blockCode } from '../components/block_code'
import { _inlineCodeCard } from '../components/inline_code'
import { _section } from '../components/section'

export const _routing = _section([
  widget('h2', {
    children: 'Routing'
  }),
  widget('p', {
    children: [
      widget('span', {
        children: 'Livjs expose a'
      }),
      _inlineCodeCard('Navigator'),
      widget('span', {
        children: 'method to navigate between routes'
      })
    ]
  }),
  widget('p', {
    children: [
      widget('span', {
        children:
          'Declare routes in the App function, routes must export a default widget function'
      })
    ]
  }),
  _blockCode(
    `App({
routes: [
{ name: 'home', path: '/', component: () => import('./hello') },
{ name: 'about', path: '/about', component: () => import('./about.js') },
]
})
`
  ),
  widget('p', {
    children: 'Use the Navigator Method to navigate between routes'
  }),
  _blockCode(`import { Navigator } from 'livjs'

export default () => {
return widget("div", {
children: [
  widget('div', {
    text: 'hello world',
    event: {
      onclick() {
        Navigator.push('/about')
      }
    }
  }),
],
})
}
`)
])
