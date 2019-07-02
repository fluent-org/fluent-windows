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
        'M1074 512q26 0 44.5 18.5T1137 575v355q0 26-18.5 44.5T1074 993h-81V788q0-23-9-43.5T960 709t-35.5-24-43.5-9-43.5 9-36 24-24.5 35.5-9 43.5v205h-50q-26 0-44.5-18.5T655 930V575q0-26 18.5-44.5T718 512h356z'
    }
  ]
]

export default createIcon(jsx, 'NUIFPRollLeftAction')
