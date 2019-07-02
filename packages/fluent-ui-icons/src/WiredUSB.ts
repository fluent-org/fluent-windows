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
        'M768 256h128v128H768V256zm256 0h128v128h-128V256zm384 256q26 0 49.5 10t41 27 27.5 40 10 49v900q0 26-10 49t-27.5 40-41 27-49.5 10h-384v384H896v-384H512q-26 0-49.5-10t-41-27-27.5-40-10-49V638q0-26 10-49t27.5-40 41-27 49.5-10V0h896v512zm-768 0h640V128H640v384zm768 128H512v896h896V640z'
    }
  ]
]

export default createIcon(jsx, 'WiredUSB')
