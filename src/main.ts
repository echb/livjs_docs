import { App, widget } from 'livjs'
import { _glass } from './style'
import { _header } from './sections/header'
import { _card } from './components/card'
import { _creation } from './sections/creation'
import { _inlineCodeCard } from './components/inline_code'
import { _blockCode } from './components/block_code'
import { _code } from './components/code'
import { _section } from './components/section'
import { _syntax } from './sections/syntax'
import { _properties } from './sections/properties'
import { _reactivity } from './sections/reactivity'
import { _routing } from './sections/routing'
import { SECTIONS } from './sections/sections'

App({
  children: [
    // MARK: Header
    _header,
    widget('main', {
      style: {
        display: 'flex',
        marginBottom: '20px'
      },
      children: [
        widget('div', {
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
        }),
        widget('aside', {
          style: {
            // backgroundColor: '#ffffff0f'
          },
          children: widget('div', {
            style: {
              position: 'sticky',
              top: '0px',
              padding: '0px 15px'
            },
            children: widget('ul', {
              style: {
                listStyle: 'none',
                padding: '0px',
                margin: '0px',
                gap: '2px',
                display: 'inline-flex',
                flexDirection: 'column',
                fontSize: '13px'
              },
              children: Object.values(SECTIONS).map((e) =>
                widget('a', {
                  class: 'link',
                  style: {
                    padding: '2px 4px',
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
            })
          })
        })
      ]
    })
  ]
})
