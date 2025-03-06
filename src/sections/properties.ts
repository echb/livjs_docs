import { _inlineCodeCard } from '../components/inline_code'
import { _section } from '../components/section'
import { SECTIONS } from './sections'
import { shikiCode } from '#src/components/shiki.ts'
import { br, h2, li, span, ul } from '#src/tags.ts'

const examples = {
  properties: `id //id of the html element
children  //children of the html element
class //class of the html element
style //style of the html element
event //any html event
attributes  //attributes of the html element
cb  //callback function to access the element context, current workaround to missing features`
}

export const _properties = _section([
  h2({
    children: 'Widget properties',
    id: SECTIONS.properties.id
  }),
  shikiCode(examples.properties),
  ul({
    style: {
      marginLeft: '0',
      gap: '10px',
      display: 'grid'
    }
  })
])
