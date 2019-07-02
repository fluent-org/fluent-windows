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
        'M2048 128v1664H0V128h2048zm-128 128h-384v256h384V256zm-512 1024V640H640v640h768zm-768 128v256h768v-256H640zM512 640H128v640h384V640zm896-128V256H640v256h768zm128 768h384V640h-384v640zM128 256v256h384V256H128zm0 1408h384v-256H128v256zm1792 0v-256h-384v256h384z'
    }
  ]
]

export default createIcon(jsx, 'PageMarginLandscapeWide')
