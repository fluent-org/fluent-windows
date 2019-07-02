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
        'M768 256h128v128H768V256zm384 0v128h-128V256h128zm256 256q27 0 50 10t40.5 27.5T1526 590t10 50v1280q0 27-10 50t-27.5 40.5-40.5 27.5-50 10H512q-27 0-50-10t-40.5-27.5T394 1970t-10-50V640q0-27 10-50t27.5-40.5T462 522t50-10V0h896v512zm-768 0h640V128H640v384zm768 128H512v1280h896V640z'
    }
  ]
]

export default createIcon(jsx, 'USB')
