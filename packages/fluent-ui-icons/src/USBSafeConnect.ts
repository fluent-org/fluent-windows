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
        'M768 256h128v128H768V256zm384 0v128h-128V256h128zm877 1197l-557 558-269-270 90-90 179 178 467-466zm-877 467l128 128H512q-27 0-50-10t-40.5-27.5T394 1970t-10-50V640q0-27 10-50t27.5-40.5T462 522t50-10V0h896v512q27 0 50 10t40.5 27.5T1526 590t10 50v896l-64 64-64-64V640H512v1280h640zM640 512h640V128H640v384z'
    }
  ]
]

export default createIcon(jsx, 'USBSafeConnect')
