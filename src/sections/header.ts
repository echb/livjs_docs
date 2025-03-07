import { widget } from 'livjs'
import { _glass } from '../style'

const livjsVersion = '0.5.1'

export const _header = widget('div', {
  style: {
    ..._glass,
    top: '0',
    background: 'rgba(0, 0, 0, 0.16)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    zIndex: '2',
    padding: '16px',
    borderBottom: '1px solid #000000'
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
              children: 'Livjs',
              style: {
                margin: '0',
                padding: '0'
              }
            }),
            widget('span', {
              children:
                'A simple JavaScript/Typescript Library for building web applications',
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
              },
              children: [
                widget('span', {
                  children: `Version ${livjsVersion}`,
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
                  children: 'GitHub',
                  attributes: {
                    href: 'https://github.com/echb/livjs',
                    target: '_blank'
                  }
                }),
                widget('a', {
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
    widget('div', {
      children:
        'Please keep in mind that Livj is still under active development and full backward compatibility is not guaranteed before reaching v1.0.0. Livjs is NOT recommended for production critical applications yet, unless you are fine with applying some manual migration steps from time to time.',
      style: () => ({
        color: '#f54848',
        marginTop: '16px',
        fontSize: '0.8rem'
      })
    })
  ]
})
