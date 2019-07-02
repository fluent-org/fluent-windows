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
        'M2048 256v128H896V256h1152zm-256 1280H0v-128h1792v128zM256 1024h1792v128H256v-128zm0 768h1792v128H256v-128zm64-1024q-66 0-124-25.5t-101.5-69-69-101.5T0 448t25.5-124 69-101.5 101.5-69T320 128t124 25.5 101.5 69 69 101.5T640 448H512q0-40-15-75t-41-61-61-41-75-15-75 15-61 41-41 61-15 75 15 75 41 61 61 41 75 15h1472v128H320z'
    }
  ]
]

export default createIcon(jsx, 'ReadingList')
