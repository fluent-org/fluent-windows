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
        'M1664 0h128v512l-768 1536L256 512V0h128v441l320-161 320 161 320-161 320 161V0zm-640 583L704 424 425 563l294 589h610l294-589-279-139zm-241 697l241 482 241-482H783z'
    }
  ]
]

export default createIcon(jsx, 'Pencil')
