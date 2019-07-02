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
        'M1764 704q35-60 93-94t127-34v768q-69 0-127-34t-93-94h-571q-20 57-56 104.5t-83.5 81-104 52T832 1472V448q61 0 117.5 18.5t104 52 83.5 81 56 104.5h571z'
    }
  ]
]

export default createIcon(jsx, 'PinFill')
