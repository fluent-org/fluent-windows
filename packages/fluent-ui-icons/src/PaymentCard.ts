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
        'M1888 256q33 0 62 12.5t51 34.5 34.5 51 12.5 62v1088q0 33-12.5 62t-34.5 51-51 34.5-62 12.5H160q-33 0-62-12.5T47 1617t-34.5-51T0 1504V416q0-33 12.5-62T47 303t51-34.5 62-12.5h1728zM160 384q-14 0-23 9t-9 23v224h1792V416q0-14-9-23t-23-9H160zm1728 1152q14 0 23-9t9-23V768H128v736q0 14 9 23t23 9h1728zm-480-384h256v128h-256v-128z'
    }
  ]
]

export default createIcon(jsx, 'PaymentCard')
