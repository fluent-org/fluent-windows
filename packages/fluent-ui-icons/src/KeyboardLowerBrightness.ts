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
        'M1024 768H896V576h128v192zM507 982L372 846l90-90 136 135zm-123 426H192v-128h192v128zm1152-128h192v128h-192v-128zm-123-298l-91-91 136-135 90 90zm-894 426q-3-16-5-32t-2-32q0-93 35.5-174.5t96-142 142-96T960 896t174.5 35.5 142 96 96 142T1408 1344q0 16-2 32t-5 32h-128q7-29 7-64 0-66-25.5-124t-69-101.5-101.5-69-124-25.5-124.5 25.5-102 69T665 1220t-25 124q0 35 7 64H519zm1401 128v128H0v-128h1920z'
    }
  ]
]

export default createIcon(jsx, 'KeyboardLowerBrightness')
