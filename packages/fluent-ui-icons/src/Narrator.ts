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
        'M640 0h1408v1024h-677l-411 410v-410H640V0zm1280 896V128H768v768h320v230l229-230h603zm-128 768v-512h128v640h-896v128h256v128H640v-128h256v-128H0V640h512v128H128v896h1664z'
    }
  ]
]

export default createIcon(jsx, 'Narrator')
