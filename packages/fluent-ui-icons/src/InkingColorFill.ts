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
        'M1024 128q124 0 238.5 32t214 90.5 181 140 140 181 90.5 214 32 238.5-32 238.5-90.5 214-140 181-181 140-214 90.5-238.5 32-238.5-32-214-90.5-181-140-140-181-90.5-214-32-238.5 32-238.5 90.5-214 140-181 181-140 214-90.5 238.5-32z'
    }
  ]
]

export default createIcon(jsx, 'InkingColorFill')
