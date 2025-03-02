import { widget } from 'livjs'
import { _blockCode } from '#components/block_code.ts'
import { _inlineCodeCard } from '#components/inline_code.ts'
import { _section } from '#components/section.ts'
import { SECTIONS } from './sections'
import { shikiCode } from '#src/components/shiki.ts'

const examples = {
  declareRoutes: `App({
  routes: [
    { name: 'home', path: '/', component: () => import('./hello') },
    { name: 'about', path: '/about', component: () => import('./about') },
  ]
})`,
  navigator: `import { Navigator } from 'livjs'

export default () => {
  return widget("div", {
    children: [
      widget('div', {
        children: 'hello world',
        event: {
          click() {
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
  shikiCode(examples.declareRoutes, {
    before: widget('span', {
      children: 'main.ts',
      style: {
        borderBottom: '1px solid white'
      }
    })
  }),
  widget('p', {
    children: 'Use the Navigator Method to navigate between routes'
  }),
  shikiCode(examples.navigator, {
    before: widget('span', {
      children: 'hello.ts',
      style: {
        borderBottom: '1px solid white'
      }
    })
  })
])
