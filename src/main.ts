import { App, signal, widget } from 'livjs'
import { _glass } from './style'
import { _header } from './sections/header'
import { _card } from '#components/card.ts'
import { _creation } from './sections/creation'
import { _inlineCodeCard } from '#components/inline_code.ts'
import { _blockCode } from '#components/block_code.ts'
import { _code } from '#components/code.ts'
import { _section } from '#components/section.ts'
import { _syntax } from './sections/syntax'
import { _properties } from './sections/properties'
import { _reactivity } from './sections/reactivity'
import { _routing } from './sections/routing'
import { SECTIONS } from './sections/sections'

const showNavVar = signal(false)

App({
  children: [
    widget('div', {
      attributes: {
        layout: ''
      },
      style: {
        marginBottom: '40px'
      },
      children: [
        // MARK: Header
        _header,

        // MARK: Sidebar navigation
        widget('div', {
          event: {
            click(e) {
              if (e.target !== e.currentTarget) return

              showNavVar.value = false
            }
          },
          style: () => ({
            backgroundColor: '#0009',
            top: '0',
            left: '0',
            height: '100dvh',
            width: '100dvw',
            position: 'fixed',
            zIndex: '4',
            opacity: showNavVar.value ? '1' : '0',
            transform: showNavVar.value ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform .5s cubic-bezier(.19,1,.22,1), opacity .5s'
          }),
          children: [
            widget('div', {
              class: 'sidebar',
              style: () => ({
                display: 'inline-flex',
                backgroundColor: '#18181b',
                padding: '32px',
                height: '100dvh',
                flexDirection: 'column'
              }),
              children: [
                widget('span', {
                  style: {
                    fontWeight: '700',
                    marginBottom: '10px'
                  },
                  children: 'Guide'
                }),
                widget('ul', {
                  style: {
                    listStyle: 'none',
                    padding: '0px',
                    margin: '0px',
                    gap: '8px',
                    display: 'inline-flex',
                    flexDirection: 'column',
                    fontSize: '13px',
                    fontWeight: '300'
                  },
                  children: [
                    ...Object.values(SECTIONS).map((e) =>
                      widget('a', {
                        class: 'link',
                        style: {
                          fontSize: '14px',
                          borderRadius: '6px'
                        },
                        attributes: {
                          href: `#${e.id}`
                        },
                        children: [
                          widget('li', {
                            style: {},
                            children: e.text
                          })
                        ]
                      })
                    )
                  ]
                })
              ]
            })
          ]
        }),

        // MARK: Sticky menu
        widget('div', {
          style: {
            position: 'sticky',
            top: '0px',
            zIndex: '3',
            width: '100%',
            backgroundColor: '#1b1b1f',
            borderBottom: '1px solid #000000'
          },
          children: [
            widget('div', {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                padding: '12px 20px',
                width: 'min-content',
                cursor: 'pointer'
              },
              children: [
                widget('div', {
                  class: 'gg-menu-left-alt'
                }),
                widget('span', {
                  style: {
                    fontSize: '12px'
                  },
                  children: 'Menu'
                })
              ],
              event: {
                click() {
                  showNavVar.value = true
                }
              }
            })
          ]
        }),

        widget('main', {
          children: [
            // MARK: Introduction
            _creation,

            // MARK: Syntax
            _syntax,

            // MARK: Properties
            _properties,

            // MARK: Reactivity
            _reactivity,

            // MARK: Routing
            _routing
          ]
        })
      ]
    })
  ]
})
