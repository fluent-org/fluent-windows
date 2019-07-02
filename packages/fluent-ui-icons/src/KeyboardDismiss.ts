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
        'M1783 384q28 0 53 11.5t44 31 29.5 45.5 10.5 56v864q0 30-10.5 56.5t-29.5 46-44 30.5-53 11H137q-29 0-53.5-11T40 1494.5t-29.5-46T0 1392V528q0-30 10.5-56T40 426.5t43.5-31T137 384h1646zm9 144q0-8-3.5-12t-5.5-4H137q-2 0-5.5 4t-3.5 12v864q0 8 3.5 12t5.5 4h1646q2 0 5.5-4t3.5-12V528zm-605 1107l90 90-317 317-317-317 90-90 227 226z'
    }
  ]
]

export default createIcon(jsx, 'KeyboardDismiss')
