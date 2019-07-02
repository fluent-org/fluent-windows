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
        'M1024 165l941 942-90 90-83-82v805h-640v-640H896v640H256v-805l-83 82-90-90zm640 1627V987l-640-640-640 640v805h384v-640h512v640h384z'
    }
  ]
]

export default createIcon(jsx, 'Home')
