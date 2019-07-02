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
        'M1024 1984q-40 0-70-40.5T903 1840t-35-139-22-147-11.5-128-3.5-82h386q-1 25-4 82t-11 128-22 147-35 139-51 103.5-70 40.5zM1856 0v448H192V0h1664z'
    }
  ]
]

export default createIcon(jsx, 'InkingToolFill')
