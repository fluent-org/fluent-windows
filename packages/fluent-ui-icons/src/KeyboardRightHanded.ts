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
        'M1783 384q30 0 55 12t43 31.5 28.5 46T1920 528v864q0 29-10.5 55t-28.5 45.5-43 31.5-55 12H137q-30 0-55-12t-43-31.5-28.5-45.5T0 1392V528q0-28 10.5-54.5t28.5-46T82 396t55-12h1646zm9 144q0-11-9-16H137q-9 5-9 16v864q0 11 9 16h1646q9-5 9-16V528zm-384 368h256v128h-256V896zm0 256h256v128h-256v-128zm-512 0h384v128H896v-128zm256-256h128v128h-128V896zm256-128h-128V640h128v128zm128-128h128v128h-128V640z'
    }
  ]
]

export default createIcon(jsx, 'KeyboardRightHanded')
