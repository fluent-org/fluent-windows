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
        'M1365 341v1366q0 70-27 132t-73.5 108.5T1156 2021t-132 27-132-27-108.5-73.5T710 1839t-27-132V341q0-70 27-132t73.5-108.5T892 27t132-27 132 27 108.5 73.5T1338 209t27 132z'
    }
  ]
]

export default createIcon(jsx, 'SliderThumb')
