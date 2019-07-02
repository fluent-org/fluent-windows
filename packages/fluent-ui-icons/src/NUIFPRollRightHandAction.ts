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
        'M1074 502q26 0 44.5 18.5T1137 565v355q0 26-18.5 44.5T1074 983h-40V778q0-23-9-43.5t-24-35.5-35.5-24-43.5-9-43.5 9-36 24-24.5 35.5-9 43.5v205h-91q-26 0-44.5-18.5T655 920V565q0-26 18.5-44.5T718 502h356z'
    }
  ]
]

export default createIcon(jsx, 'NUIFPRollRightHandAction')
