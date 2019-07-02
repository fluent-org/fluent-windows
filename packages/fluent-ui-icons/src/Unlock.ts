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
        'M1792 896v1152H256V896h1152V512q0-82-29.5-152t-81-121.5-121.5-81-152-29.5-152 29.5-121.5 81-81 121.5T640 512H512q0-109 39-202.5T659 147 821.5 39 1024 0t202.5 39T1389 147t108 162.5 39 202.5v384h256zm-128 128H384v896h1280v-896z'
    }
  ]
]

export default createIcon(jsx, 'Unlock')
