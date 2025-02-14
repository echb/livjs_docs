import { type AnyWidgetElement, App, widget } from 'livjs'
import './style.css'

const theme = {
  border: 'white'
}

const _css_border = {
  borderRadius: '8px',
  border: `1px solid ${theme.border}`
}

const _glass = { backdropFilter: 'blur(10px)' }

const _card = (
  child: AnyWidgetElement,
  style: Partial<Record<keyof CSSStyleDeclaration, string>> = {}
) =>
  widget('div', {
    style: {
      ..._css_border,
      display: 'flex',
      padding: '1rem',
      ...style
    },
    children: [child]
  })

const _code = (
  text: string,
  style: Partial<Record<keyof CSSStyleDeclaration, string>> = {}
) =>
  widget('code', {
    text,
    style: {
      fontFamily: 'monospace',
      // fontSize: '1rem',
      whiteSpace: 'pre-wrap',
      ...style
    }
  })

const _inlineCodeCard = (
  text: string,
  style?: Partial<Record<keyof CSSStyleDeclaration, string>>
) =>
  widget('span', {
    style: {
      marginLeft: '3px',
      marginRight: '3px',
      padding: '1px 3px',
      ..._css_border,
      ...style
    },
    children: [_code(text)]
  })

const _section = (children: AnyWidgetElement[]) =>
  widget('section', {
    style: {
      // display: 'grid',
      // gap: '16px',
      marginLeft: '16px',
      marginRight: '16px'
    },
    children: children
  })

App({
  children: [
    // MARK: Header
    _header(),

    // MARK: Introduction
    _creation(),

    // MARK: Syntax
    _section([
      widget('h2', {
        text: 'Syntax'
      }),
      widget('p', {
        text: 'There is no special syntax for Livjs!! plain JavaScript/Typescript is enough.'
      }),
      widget('span', {
        text: 'Everything is a function widget'
      }),
      _inlineCodeCard('widget()'),
      widget('span', {
        text: ". That's all. Great, isn't it?"
      })
    ]),

    // MARK: Properties
    _section([
      widget('h2', {
        text: 'Widget properties'
      }),
      widget('ul', {
        style: {
          marginLeft: '0',
          gap: '10px',
          display: 'grid'
        },
        children: [
          widget('li', {
            children: [
              widget('span', {
                text: 'text'
              }),
              _inlineCodeCard('text?: string')
            ]
          }),
          widget('li', {
            children: [
              widget('span', {
                text: 'style'
              }),
              _inlineCodeCard('style?:Record<anyCssProperty, string>')
            ]
          }),
          widget('li', {
            children: [
              widget('span', {
                text: 'cb'
              }),
              _inlineCodeCard('?: ((el: AnyWidgetElement) => void)'),
              widget('br', {}),
              widget('span', {
                text: 'callback function to access the element context, current workaround to missing features'
              })
            ]
          }),
          widget('li', {
            children: [
              widget('span', {
                text: 'children'
              }),
              _inlineCodeCard('children?: AnyWidgetElement[]')
            ]
          }),
          widget('li', {
            children: [
              widget('span', {
                text: 'event'
              }),
              _inlineCodeCard(
                'event?:Record<anyEventProperty, callbackFunction: ((e: Event) => void)>'
              )
            ]
          }),
          widget('li', {
            children: [
              widget('span', {
                text: 'items'
              }),
              _inlineCodeCard('items?: TSignal<unknown[]>'),
              widget('br', {}),
              widget('span', {
                text: '(Required to use builder)'
              })
            ]
          }),
          widget('li', {
            children: [
              widget('span', {
                text: 'builder'
              }),
              _inlineCodeCard(
                'builder?: ((e: T, index: number) => AnyWidgetElement'
              ),
              widget('br', {}),
              widget('span', {
                text: ' (It requires the property'
              }),
              _inlineCodeCard('items'),
              widget('span', {
                text: 'to work correctly)'
              })
            ]
          })
        ]
      })
    ]),

    // MARK: Reactivity
    _section([
      widget('h2', {
        text: 'Reactivity'
      }),
      widget('p', {
        text: 'Reactivity is a core concept of Livjs. It is based on signals and effects. Signals are reactive values that can be used to create reactive UIs. Effects are functions that can be used to perform side effects, such as fetching data from an API or updating the DOM. Signals and effects are used together to create a reactive system that can automatically update the UI when the underlying data changes.',
        children: [
          widget('h3', {
            text: 'Declaring Reactive State'
          }),
          _inlineCodeCard('signal()', { margin: '0' }),
          widget('br', {}),
          widget('span', {
            text: 'Signals are reactive values that can be used to create reactive UIs. They are similar to Reactive Variables in React.'
          }),
          widget('br', {}),
          widget('br', {}),
          _inlineCodeCard('effect()', { margin: '0' }),
          widget('br', {}),
          widget('span', {
            text: 'Effects are functions that can be used to perform side effects, such as fetching data from an API or updating the DOM. They are similar to Reactive Functions in React.'
          }),
          widget('br', {}),
          widget('br', {}),
          _card(
            _code(
              `import { signal, effect } from 'livjs'
              
const count = signal(0)`,
              {
                color: 'black'
              }
            ),
            {
              backgroundColor: 'white'
            }
          ),
          widget('br', {}),
          _inlineCodeCard('signal()', { margin: '0' }),
          widget('span', {
            text: ' takes the argument and returns it wrapped within a ref object with a'
          }),
          _inlineCodeCard(' .value '),
          widget('p', {
            text: 'property:'
          })
        ]
      })
    ]),

    // MARK: Routing
    _section([
      widget('h2', {
        text: 'Routing'
      }),
      widget('p', {
        children: [
          widget('span', {
            text: 'Livjs expose a'
          }),
          _inlineCodeCard('Navigator'),
          widget('span', {
            text: 'method to navigate between routes'
          })
        ]
      }),
      widget('p', {
        children: [
          widget('span', {
            text: 'Declare routes in the App function, routes must export a default widget function'
          })
        ]
      }),
      _blockCode(
        `App({
  routes: [
    { name: 'home', path: '/', component: () => import('./hello') },
    { name: 'about', path: '/about', component: () => import('./about.js') },
  ]
})
`
      ),
      widget('p', {
        text: 'Use the Navigator Method to navigate between routes'
      }),
      _blockCode(`import { Navigator } from 'livjs'

export default () => {
  return widget("div", {
    children: [
      widget('div', {
        text: 'hello world',
        event: {
          onclick() {
            Navigator.push('/about')
          }
        }
      }),
    ],
  })
}
`)
    ])
  ]
})

function _header() {
  return widget('div', {
    style: {
      ..._glass,
      // position: 'sticky',
      top: '0',
      background: 'rgba(0, 0, 0, 0.16)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      // borderBottom: `1px solid ${theme.border}`,
      zIndex: '2',
      marginBottom: '16px',
      padding: '16px'
    },
    children: [
      widget('div', {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'end'
        },
        children: [
          widget('div', {
            children: [
              widget('h1', {
                text: 'Livjs',
                style: {
                  margin: '0',
                  padding: '0'
                }
              }),
              widget('span', {
                text: 'A simple JavaScript/Typescript Framework for building web applications',
                style: {
                  fontSize: '0.8rem'
                }
              })
            ]
          }),
          widget('div', {
            style: {
              display: 'grid',
              gap: '8px'
            },
            children: [
              widget('div', {
                style: {
                  display: 'flex',
                  flexDirection: 'column'
                  // gap: '3px'
                },
                children: [
                  widget('span', {
                    text: 'Version 0.0.8',
                    style: {
                      fontStyle: 'italic',
                      fontSize: '0.6rem'
                    }
                  }),
                  widget('a', {
                    style: {
                      textAlign: 'end',
                      fontSize: '0.9rem'
                    },
                    text: 'GitHub',
                    cb(e) {
                      // @ts-ignore
                      e.href = 'https://github.com/echb/livjs'
                      // @ts-ignore
                      e.target = '_blank'
                      console.log(e)
                    }
                  }),
                  widget('a', {
                    style: {
                      textAlign: 'end',
                      fontSize: '0.9rem'
                    },
                    text: 'Npm',
                    cb(e) {
                      // @ts-ignore
                      e.href = 'https://www.npmjs.com/package/livjs'
                      // @ts-ignore
                      e.target = '_blank'
                      console.log(e)
                    }
                  })
                ]
              })
            ]
          })
        ]
      }),
      widget('div', {
        text: 'Please keep in mind that Livj is still under active development and full backward compatibility is not guaranteed before reaching v1.0.0. Livjs is NOT recommended for production critical applications yet, unless you are fine with applying some manual migration steps from time to time.',
        style: () => ({
          color: '#f54848',
          // borderTop: `1px solid ${theme.border}`,
          marginTop: '16px',
          fontSize: '0.8rem'
        })
      })
    ]
  })
}

function _creation() {
  return _section([
    widget('h2', {
      text: 'Creating a Livjs Application'
    }),
    widget('p', {
      children: [
        widget('span', {
          text: 'The App function is in fact a component. It search for an html element with the'
        }),
        _inlineCodeCard('id="app"'),
        widget('b', {
          text: 'property.'
        })
      ]
    }),
    _card(
      _code(
        `import { type AnyWidgetElement, App, widget } from 'livjs'

App({
children: [
  widget('div', {
  text: 'Hello World!'
  })
]
})
`,
        {
          color: 'black'
        }
      ),
      {
        backgroundColor: 'white'
      }
    )
  ])
}

function _blockCode(code: string) {
  return _card(
    _code(code, {
      color: 'black'
    }),
    {
      backgroundColor: 'white'
    }
  )
}
