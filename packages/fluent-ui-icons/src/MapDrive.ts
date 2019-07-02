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
        'M1024 1024v128h128v256h256v128h512v128h-512v128H512v-128H0v-128h512v-128h256v-256h128v-128H0V384q0-27 10-50t27.5-40.5T78 266t50-10h1664q27 0 50 10t40.5 27.5T1910 334t10 50v640h-896zm0 512v-256H896v256H640v128h640v-128h-256zM128 896h1664V384H128v512zm1472-384q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19z'
    }
  ]
]

export default createIcon(jsx, 'MapDrive')
