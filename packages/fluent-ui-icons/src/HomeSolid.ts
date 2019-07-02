import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1024 166l941 941-90 90-83-82v805h-512v-640H768v640H256v-805l-83 82-90-90 941-941z'
    }
  ]
]

export default createIcon(jsx, 'HomeSolid')
