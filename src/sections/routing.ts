import { inlineHighlight } from '#components/inline_highlight/inline_highlight.ts'
import { _section } from '#components/section/section.ts'
import { shikiCode } from '#components/shiki.ts'
import { h2, h3, p, span } from '#src/tags.ts'
import { SECTIONS } from './sections'

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

export default _section([
  h2({
    children: 'Routing',
    id: SECTIONS.routing.id
  }),
  p({
    children: [
      span({
        children: 'Livjs expose a'
      }),
      inlineHighlight('Navigator'),
      span({
        children: 'method to navigate between routes'
      })
    ]
  }),
  p({
    children: [
      span({
        children:
          'Declare routes in the App function, routes must export a default widget function'
      })
    ]
  }),
  shikiCode(examples.declareRoutes, {
    before: span({
      children: 'main.ts',
      style: {
        borderBottom: '1px solid white'
      }
    })
  }),
  p({
    children: 'Use the Navigator Method to navigate between routes'
  }),
  shikiCode(examples.navigator, {
    before: span({
      children: 'hello.ts',
      style: {
        borderBottom: '1px solid white'
      }
    })
  }),
  h3({
    children: 'Navigator methods'
  }),
  span({
    children: inlineHighlight('Todo')
  })
])
