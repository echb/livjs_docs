import { type AnyWidgetElement, ScopedCss } from 'livjs'
import { section } from '#src/tags.ts'

export const _section = (children: AnyWidgetElement[]) =>
  section({
    children: [ScopedCss(() => import('./section.css?inline')), ...children]
  })
