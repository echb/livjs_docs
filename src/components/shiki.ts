import { _css_border } from '#src/style.ts'
import { signal, type TSignal, widget } from 'livjs'
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

export const shikiCode = (text: string) => {
  const hover = signal(false)
  const copied: TSignal<number | undefined> = signal(0)
  const shikiCodeBlock = widget('div')
  shikiCodeBlock.innerHTML = code(text)

  return widget('div', {
    style: {
      backgroundColor: '#121212',
      padding: _css_border.borderRadius,
      borderRadius: '5px',
      position: 'relative'
    },
    children: [
      widget('div', {
        style: {
          position: 'absolute',
          top: '10px',
          right: '10px',
          display: 'flex',
          alignItems: 'center'
        },
        children: [
          widget('div', {
            style: () => ({
              display: copied.value ? 'initial' : 'none',
              marginRight: '10px'
            }),
            children: copiedText
          }),
          widget('div', {
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
              widget('div', {
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
                navigator.clipboard.writeText(text)
                clearTimeout(copied.value)
                copied.value = setTimeout(() => {
                  clearTimeout(copied.value)
                  copied.value = undefined
                }, 1000)
              }
            }
          })
        ]
      }),
      shikiCodeBlock
    ]
  })
}
