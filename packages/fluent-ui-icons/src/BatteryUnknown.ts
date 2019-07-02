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
        'M1792 1088h64v128h-64v320H256V768h1536v320zm-64 384V832H320v640h1408zm-913-65l-46-46 210-209-210-209 46-46 209 210 209-210 46 46-210 209 210 209-46 46-209-210z'
    }
  ]
]

export default createIcon(jsx, 'BatteryUnknown')
