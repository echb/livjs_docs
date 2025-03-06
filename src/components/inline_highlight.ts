import { span } from '#src/tags.ts'

export const inlineHighlight = (text: string) =>
  span({
    children: text,
    style: {
      borderRadius: '4px',
      padding: '3px 6px',
      color: '#8cccd5',
      backgroundColor: '#65758529'
    }
  })
