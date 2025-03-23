import { App, Lazy, signal } from 'livjs'
import { _creation } from './sections/creation'
import { _header } from './sections/header'
import { _properties } from './sections/properties'
import { _reactivity } from './sections/reactivity'
import { SECTIONS } from './sections/sections'
import { _syntax } from './sections/syntax'
import { a, div, li, main, span, ul } from './tags'
import './styles/global.css'
import { mb40 } from './styles/styles.css'
import { routing } from './sections/routing'

const showNavVar = signal(false)

App({
  children: [
    div({
      class: mb40,
      children: [
        // MARK: Header
        _header,

        // MARK: Sidebar navigation
        div({
          style: () => ({
            backgroundColor: '#0009',
            top: '0',
            left: '0',
            height: '100dvh',
            width: '100dvw',
            position: 'fixed',
            zIndex: showNavVar.value ? '4' : '-1',
            opacity: showNavVar.value ? '1' : '0',
            transition: 'opacity .5s cubic-bezier(.19,1,.22,1)'
          }),
          event: {
            click(e) {
              if (e.target !== e.currentTarget) return

              showNavVar.value = false
            }
          }
        }),
        div({
          class: 'sidebar',
          style: () => ({
            top: '0',
            left: '0',
            position: 'fixed',
            zIndex: '4',
            transform: showNavVar.value ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform .5s cubic-bezier(.19,1,.22,1)',
            display: 'inline-flex',
            backgroundColor: '#18181b',
            padding: '32px',
            height: '100dvh',
            flexDirection: 'column'
          }),
          children: [
            span({
              style: {
                fontWeight: '700',
                marginBottom: '10px'
              },
              children: 'Guide'
            }),
            ul({
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
                  li({
                    class: 'link',
                    style: {
                      fontSize: '14px',
                      borderRadius: '6px'
                    },
                    children: [
                      a({
                        attributes: {
                          href: `#${e.id}`
                        },
                        style: {},
                        children: e.text
                      })
                    ]
                  })
                )
              ]
            })
          ]
        }),

        // MARK: Sticky menu
        div({
          style: {
            position: 'sticky',
            top: '0px',
            zIndex: '3',
            width: '100%',
            backgroundColor: '#1b1b1f',
            borderBottom: '1px solid #000000'
          },
          children: [
            div({
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                padding: '12px 20px',
                width: 'min-content',
                cursor: 'pointer'
              },
              children: [
                div({
                  class: 'gg-menu-left-alt'
                }),
                span({
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

        main({
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
            routing
          ]
        })
      ]
    })
  ]
})
