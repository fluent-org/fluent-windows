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
        'M1792 352v1568q0 27-10 50t-27.5 40.5-40.5 27.5-50 10H384q-27 0-50-10t-40.5-27.5T266 1970t-10-50v-512l128-128V928L256 768V128q0-27 10-50t27.5-40.5T334 10t50-10h1056zm-128 53l-277-277H384v595l128 160v450q-31 33-63.5 64.5T384 1461v459h1280V405zM640 256h128v384H640V256zm256 0h128v384H896V256zm256 0h128v384h-128V256z'
    }
  ]
]

export default createIcon(jsx, 'SDCard')
