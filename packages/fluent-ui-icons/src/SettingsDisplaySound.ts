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
        'M1680 1487l-91-90q36-36 55.5-83t19.5-98-19.5-98-55.5-83l91-90q54 54 83 124.5t29 146.5-29 146.5-83 124.5zm181 182l-91-91q72-72 111-166t39-196-39-196-111-166l91-91q90 91 138.5 208t48.5 245-48.5 245-138.5 208zm-69-1029V384H128v896h768v128H0V256h1920v384h-128zm-347 128h91v896h-91l-256-256h-165v-384h165zm-37 219l-165 165h-91v128h91l165 165V987zm-144 677H640v-128h496z'
    }
  ]
]

export default createIcon(jsx, 'SettingsDisplaySound')
