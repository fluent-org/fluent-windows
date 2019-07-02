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
        'M896 1152H0V0h1920v1152h-896v128h256v128H640v-128h256v-128zm-768-128h1664V128H128v896zm1824 512q40 0 68 28t28 68v224q0 40-15 75t-41 61-61 41-75 15-75-15-61-41-41-61-15-75v-224q0-40 28-68t68-28h192zm-32 128h-128v192q0 26 19 45t45 19 45-19 19-45v-192zm-448-128l128 512H64l128-512h1280zm-36 384l-64-256h-92v128h-128v-128h-128v128H896v-128H768v128H640v-128H512v128H384v-128h-92l-64 256h1208z'
    }
  ]
]

export default createIcon(jsx, 'uniF71E')
