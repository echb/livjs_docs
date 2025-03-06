import { _css_border } from '#src/style.ts'
import { div } from '#src/tags.ts'
import { type AnyWidgetElement, signal, type TSignal } from 'livjs'
import { createHighlighterCore } from 'shiki/core'
import { createOnigurumaEngine } from 'shiki/engine/oniguruma'

const highlighter = await createHighlighterCore({
  themes: [import('@shikijs/themes/vitesse-dark')],
  langs: [import('@shikijs/langs/typescript')],
  engine: createOnigurumaEngine(import('shiki/wasm'))
})

await highlighter.loadTheme(import('@shikijs/themes/vitesse-light'))

const code = (code: string) =>
  highlighter.codeToHtml(code, {
    lang: 'ts',
    theme: 'vitesse-dark'
  })

const copiedText = 'Copied'

export const shikiCode = (
  text: string,
  params?: {
    before?: AnyWidgetElement | AnyWidgetElement[]
  }
) => {
  const hover = signal(false)
  const copied: TSignal<NodeJS.Timeout | undefined> = signal(undefined)
  const shikiCodeBlock = div()
  shikiCodeBlock.innerHTML = code(text)

  const before = Array.isArray(params?.before)
    ? [...(params?.before ?? [])]
    : [params?.before ?? '']

  return div({
    style: {
      backgroundColor: '#121212',
      padding: _css_border.borderRadius,
      borderRadius: '5px',
      position: 'relative'
    },
    children: [
      ...before,
      div({
        style: {
          position: 'absolute',
          top: '10px',
          right: '10px',
          display: 'flex',
          alignItems: 'center'
        },
        children: [
          div({
            style: () => ({
              display: copied.value ? 'initial' : 'none',
              marginRight: '10px'
            }),
            children: copiedText
          }),
          div({
            class: 'code-block-card',
            style: () => ({
              transition: 'background-color 0.3s ease-in-out',
              width: '40px',
              height: '40px',
              backgroundColor: hover.value ? '#63636329' : '#6363637d',
              border: hover.value ? '1px solid #636363d1' : 'none',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: _css_border.borderRadius,
              cursor: 'pointer'
            }),
            children: [
              div({
                class: () => (copied.value ? 'gg-check-o' : 'gg-copy')
              })
            ],
            event: {
              mouseleave: () => {
                hover.value = false
              },
              mouseenter: () => {
                hover.value = true
              },
              click: () => {
                const time = 1000
                navigator.clipboard.writeText(text)
                clearTimeout(copied.value)
                copied.value = setTimeout(() => {
                  clearTimeout(copied.value)
                  copied.value = undefined
                }, time)
              }
            }
          })
        ]
      }),
      shikiCodeBlock
    ]
  })
}
