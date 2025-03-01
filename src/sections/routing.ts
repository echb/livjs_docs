import { widget } from 'livjs'
import { _blockCode } from '../components/block_code'
import { _inlineCodeCard } from '../components/inline_code'
import { _section } from '../components/section'
import { SECTIONS } from './sections'
import { shikiCode } from '#src/components/shiki.ts'

const examples = {
  declareRoutes: `App({
  routes: [
    { name: 'home', path: '/', component: () => import('./hello') },
    { name: 'about', path: '/about', component: () => import('./about.js') },
  ]
})`,
  navigator: `import { Navigator } from 'livjs'

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
}`
}

export const _routing = _section([
  widget('h2', {
    children: 'Routing',
    id: SECTIONS.routing.id
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
  shikiCode(examples.declareRoutes),
  widget('p', {
    children: 'Use the Navigator Method to navigate between routes'
  }),
  shikiCode(examples.navigator)
])
