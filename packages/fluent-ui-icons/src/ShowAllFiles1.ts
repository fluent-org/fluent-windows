import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M128 128h896v896H128V128zm768 768V256H256v640h640z'
    }
  ]
]

export default createIcon(jsx, 'ShowAllFiles1')
