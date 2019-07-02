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
        'M1005 1389l-90-90 274-275-274-275 90-90 275 274 275-274 90 90-274 275 274 275-90 90-275-274zM768 256h1280v1536H768L0 1024zm1152 1408V384H821l-640 640 640 640h1099z'
    }
  ]
]

export default createIcon(jsx, 'CalculatorBackspace')
