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
        'M1073 1664l-57 56 72 72H832v-128h241zm143 256l128 128H512q-27 0-50-10t-40.5-27.5T394 1970t-10-50V128q0-27 10-50t27.5-40.5T462 10t50-10h1024q27 0 50 10t40.5 27.5T1654 78t10 50v1264l-128 128V128H512v1792h704zm813-482l-557 557-269-269 90-91 179 179 467-467z'
    }
  ]
]

export default createIcon(jsx, 'MobileSelected')
