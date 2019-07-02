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
        'M1784 640v88q0 194-2 386t-18 385q-7 88-16.5 176t-29.5 173q-11 44-34 80.5t-56 63-74 41.5-86 15h-444v-128h444q46 0 80-28.5t45-71.5q9-36 16-78t12.5-85.5 9-86.5 6.5-81q15-181 20.5-360.5T1665 768H258V630l236-486 115 56-214 440h1389z'
    }
  ]
]

export default createIcon(jsx, 'ChineseBoPoMoFo')
