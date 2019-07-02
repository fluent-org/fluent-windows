import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1920 931q-112-94-256-135V128h256v803z'
    }
  ]
]

export default createIcon(jsx, 'DataSenseBar')
