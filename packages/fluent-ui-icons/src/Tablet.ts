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
        'M1888 512q33 0 62 12.5t51 34.5 34.5 51 12.5 62v1216q0 33-12.5 62t-34.5 51-51 34.5-62 12.5H160q-33 0-62-12.5T47 2001t-34.5-51T0 1888V672q0-33 12.5-62T47 559t51-34.5 62-12.5h1728zm32 160q0-14-9-23t-23-9H160q-14 0-23 9t-9 23v1216q0 14 9 23t23 9h1728q14 0 23-9t9-23V672zM896 1664h256v128H896v-128z'
    }
  ]
]

export default createIcon(jsx, 'Tablet')
