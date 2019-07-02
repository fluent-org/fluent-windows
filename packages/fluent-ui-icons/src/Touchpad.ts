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
        'M1792 256q27 0 50 10t40.5 27.5T1910 334t10 50v1280q0 27-10 50t-27.5 40.5-40.5 27.5-50 10H128q-27 0-50-10t-40.5-27.5T10 1714t-10-50V384q0-27 10-50t27.5-40.5T78 266t50-10h1664zM128 1152h1664V384H128v768zm0 512h768v-384H128v384zm1664 0v-384h-768v384h768z'
    }
  ]
]

export default createIcon(jsx, 'Touchpad')
