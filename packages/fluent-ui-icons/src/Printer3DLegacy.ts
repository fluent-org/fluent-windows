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
        'M320 384q-26 0-45-19t-19-45 19-45 45-19 45 19 19 45-19 45-45 19zm640 569l448 223v592l-448 223-448-223v-592zm0 142l-241 121 241 121 241-121zm-320 593l256 128v-368l-256-128v368zm640 0v-368l-256 128v368zM1920 0v1024h-512V640H512v384H0V0h1920zm-128 128H128v768h256V512h1152v384h256V128z'
    }
  ]
]

export default createIcon(jsx, 'Printer3DLegacy')
