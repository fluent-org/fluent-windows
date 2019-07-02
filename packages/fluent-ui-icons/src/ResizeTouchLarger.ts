import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1792 1024v768h-768v-128h549L275 365l90-90 1299 1298v-549h128z'
    }
  ]
]

export default createIcon(jsx, 'ResizeTouchLarger')
