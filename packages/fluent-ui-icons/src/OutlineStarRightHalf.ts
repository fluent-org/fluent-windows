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
        'M1416 1254l248 794-640-492v-162l397 306-154-493 405-311h-502q-2-8-14-45.5t-28.5-89-34.5-110-33.5-108-25.5-82l-10-32.5V0l240 768h784z'
    }
  ]
]

export default createIcon(jsx, 'OutlineStarRightHalf')
