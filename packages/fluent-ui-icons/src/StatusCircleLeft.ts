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
        'M576 896q119 0 224 45.5T983 1065t123.5 183 45.5 224-45.5 224T983 1879t-183 123.5-224 45.5-224-45.5T169 1879 45.5 1696 0 1472t45.5-224T169 1065t183-123.5T576 896z'
    }
  ]
]

export default createIcon(jsx, 'StatusCircleLeft')
