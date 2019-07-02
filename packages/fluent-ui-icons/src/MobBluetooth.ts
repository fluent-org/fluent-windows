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
        'M1499 640l-321 320 321 320-475 475v-640l-256 256-91-91 321-320-321-320 91-91 256 256V165zm-347-165v330l165-165zm165 805l-165-165v330z'
    }
  ]
]

export default createIcon(jsx, 'MobBluetooth')
