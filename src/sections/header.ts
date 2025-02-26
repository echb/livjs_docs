import { widget } from 'livjs'
import { _glass } from '../style'

export const _header = widget('div', {
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
              children: 'Livjs',
              style: {
                margin: '0',
                padding: '0'
              }
            }),
            widget('span', {
              children:
                'A simple JavaScript/Typescript Framework for building web applications',
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
                  children: 'Version 0.0.8',
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
                  cb(e) {
                    // @ts-ignore
                    e.href = 'https://github.com/echb/livjs'
                    // @ts-ignore
                    e.target = '_blank'
                  }
                }),
                widget('a', {
                  style: {
                    textAlign: 'end',
                    fontSize: '0.9rem'
                  },
                  children: 'Npm',
                  cb(e) {
                    // @ts-ignore
                    e.href = 'https://www.npmjs.com/package/livjs'
                    // @ts-ignore
                    e.target = '_blank'
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
        // borderTop: `1px solid ${theme.border}`,
        marginTop: '16px',
        fontSize: '0.8rem'
      })
    })
  ]
})
