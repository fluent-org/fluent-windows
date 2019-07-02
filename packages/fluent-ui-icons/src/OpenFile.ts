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
        'M1955 1533l-163-162v677h-128v-677l-163 162-90-90 317-317 317 317zM256 1920h1280v128H128V0h1115l549 549v475h-128V640h-512V128H256v1792zM1280 512h293l-293-293v293z'
    }
  ]
]

export default createIcon(jsx, 'OpenFile')
