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
        'M896 1408h256v128H896v-128zm992-1152q33 0 62 12.5t51 34.5 34.5 51 12.5 62v843l-128-123V416q0-14-9-23t-23-9H160q-14 0-23 9t-9 23v1216q0 14 9 23t23 9h800l128 128H160q-33 0-62-12.5T47 1745t-34.5-51T0 1632V416q0-33 12.5-62T47 303t51-34.5 62-12.5h1728zm51 1091l90 91-557 557-269-269 90-91 179 179z'
    }
  ]
]

export default createIcon(jsx, 'TabletSelected')
