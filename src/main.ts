import { App } from 'livjs'
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
import './style.css'

App({
  children: [
    // MARK: Header
    _header,

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
