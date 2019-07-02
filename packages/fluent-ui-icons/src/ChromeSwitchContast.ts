import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M614 870v359h1425v409H614v359L0 1434zm820 308V819H0V410h1434V51l614 563z'
    }
  ]
]

export default createIcon(jsx, 'ChromeSwitchContast')
