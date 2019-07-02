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
        'M0 1408v-384h384v384H0zm128-256v128h128v-128H128zM0 896V512h384v384H0zm128-256v128h128V640H128zM0 384V0h384v384H0zm128-256v128h128V128H128zm512 640V640h1152v128H640zm896 384v128H640v-128h896zM640 128h1408v128H640V128zM0 1920v-384h384v384H0zm128-256v128h128v-128H128zm512 128v-128h1152v128H640z'
    }
  ]
]

export default createIcon(jsx, 'AllApps')
