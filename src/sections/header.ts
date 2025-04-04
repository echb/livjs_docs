import { m0, mt16, p0, p16 } from '#src/styles/styles.css.ts'
import { a, div, h1, span } from '#src/tags.ts'
import { _glass } from '../style'

const livjsVersion = '0.51.1'

export const _header = div({
  style: {
    ..._glass,
    top: '0',
    background: 'rgba(0, 0, 0, 0.16)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    zIndex: '2',
    // padding: '16px',
    borderBottom: '1px solid #000000'
  },
  class: p16,
  children: [
    div({
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'end'
      },
      children: [
        div({
          children: [
            h1({
              children: 'Livjs',
              class: [m0, p0]
              // style: {
              //   margin: '0',
              //   padding: '0'
              // }
            }),
            span({
              children:
                'A simple JavaScript/Typescript Library for building web applications',
              style: {
                fontSize: '0.8rem'
              }
            })
          ]
        }),
        div({
          style: {
            display: 'grid',
            gap: '8px'
          },
          children: [
            div({
              style: {
                display: 'flex',
                flexDirection: 'column'
              },
              children: [
                span({
                  children: `Version ${livjsVersion}`,
                  style: {
                    fontStyle: 'italic',
                    fontSize: '0.6rem'
                  }
                }),
                a({
                  style: {
                    textAlign: 'end',
                    fontSize: '0.9rem'
                  },
                  children: 'GitHub',
                  attributes: {
                    href: 'https://github.com/echb/livjs',
                    target: '_blank'
                  }
                }),
                a({
                  style: {
                    textAlign: 'end',
                    fontSize: '0.9rem'
                  },
                  children: 'Npm',
                  attributes: {
                    href: 'https://www.npmjs.com/package/livjs',
                    target: '_blank'
                  }
                })
              ]
            })
          ]
        })
      ]
    }),
    div({
      children:
        'Please keep in mind that Livj is still under active development and full backward compatibility is not guaranteed before reaching v1.0.0. Livjs is NOT recommended for production critical applications yet, unless you are fine with applying some manual migration steps from time to time.',
      style: {
        color: '#f54848',
        // marginTop: '16px',
        fontSize: '0.8rem'
      },
      class: mt16
    })
  ]
})
