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
        'M1664 128v1792H512V128h384V0h384v128h384zm-128 128H640v1536h896V256zm-128 1408H768v-512h640v512z'
    }
  ]
]

export default createIcon(jsx, 'VerticalBattery4')
