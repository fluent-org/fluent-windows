import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d:
        'M1024 2011v-768l-339 338-90-90 402-403-402-403 90-90 339 338V165l538 539-384 384 384 384zm128-768v458l229-229zm0-768v458l229-229z'
    }
  ]
]

export default createIcon(jsx, 'Bluetooth')
