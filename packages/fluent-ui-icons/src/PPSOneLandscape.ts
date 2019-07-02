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
        'M1920 128v1664H0V128h1920zm-128 128H128v1408h1664V256zm-128 1280H256V384h1408v1152zM1536 512H384v896h1152V512zm-128 256H512V640h896v128zm0 256H512V896h896v128zm0 256H512v-128h896v128z'
    }
  ]
]

export default createIcon(jsx, 'PPSOneLandscape')
