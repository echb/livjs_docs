import { _card } from './card'
import { _code } from './code'

export function _blockCode(code: string) {
  return _card(
    _code(code, {
      color: 'black'
    }),
    {
      backgroundColor: 'white'
    }
  )
}
