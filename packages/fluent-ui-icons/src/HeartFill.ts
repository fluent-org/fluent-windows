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
        'M1889 287q53 53 88.5 116t53 131 17.5 138.5-17.5 138-53 130.5-88.5 116l-865 864-865-864q-53-53-88.5-116t-53-130.5T0 672.5 17.5 534t53-131T159 287q78-77 177-118t208-41 208 41 177 118l95 96 95-96q78-77 177-118t208-41 208 41 177 118z'
    }
  ]
]

export default createIcon(jsx, 'HeartFill')
