import { ScopedCss } from 'livjs'
import { span } from '#src/tags.ts'

export const inlineHighlight = (text: string) =>
  span({
    children: [ScopedCss(() => import('./inline_highlight.css?inline')), text]
  })
