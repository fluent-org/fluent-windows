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
        'M256 512h128v128H256V512zm384-128v128H384V384h256zm0 128h128v128H640V512zm256 0h256v128H896V512zm640 0h256v128h-256V512zm0-128v128h-384V384h384zm-256 512v768q27 0 50 10t40.5 27.5 27.5 40.5 10 50v256H640v-256q0-27 10-50t27.5-40.5T718 1674t50-10V896H0V128h2048v768h-768zM128 768h1792V256H128v512zm1152 1024H768v128h512v-128zm-128-896H896v768h256V896z'
    }
  ]
]

export default createIcon(jsx, 'LineDisplay')
