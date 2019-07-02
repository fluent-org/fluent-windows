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
        'M1783 384q30 0 55 11.5t43 31.5 28.5 46 10.5 55v864q0 29-10.5 55t-28.5 46-43 31.5-55 11.5H137q-30 0-55-11.5T39 1493t-28.5-46T0 1392V528q0-29 10.5-55T39 427t43-31.5 55-11.5h1646zm9 144q0-3-2-9.5t-7-6.5H137q-5 0-7 6.5t-2 9.5v864q0 3 2 9.5t7 6.5h1646q5 0 7-6.5t2-9.5V528zm-256 368h128v128h-128V896zm0 256h128v128h-128v-128zm-256 0h128v128h-128v-128zm0-256h128v128h-128V896zm0-256h128v128h-128V640zm-256 512h128v128h-128v-128zm0-256h128v128h-128V896zm0-256h128v128h-128V640zm512 0h128v128h-128V640z'
    }
  ]
]

export default createIcon(jsx, 'KeyboardOneHanded')
