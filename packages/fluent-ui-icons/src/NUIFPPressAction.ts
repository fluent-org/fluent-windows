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
        'M1074 983h-91v-41h91q9 0 15.5-6.5t6.5-15.5V565q0-9-6.5-15.5T1074 543H718q-9 0-15.5 6.5T696 565v355q0 9 6.5 15.5T718 942h70v41h-70q-26 0-44.5-18.5T655 920V565q0-26 18.5-44.5T718 502h356q26 0 44.5 18.5T1137 565v355q0 26-18.5 44.5T1074 983z'
    }
  ]
]

export default createIcon(jsx, 'NUIFPPressAction')
