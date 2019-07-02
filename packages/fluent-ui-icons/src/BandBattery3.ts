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
        'M1920 896h128v384h-128v384H128V512h1792v384zm-128 640V640H256v896h1536zm-768-768v640H384V768h640z'
    }
  ]
]

export default createIcon(jsx, 'BandBattery3')
