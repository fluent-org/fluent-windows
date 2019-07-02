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
        'M768 512h256v128H768v256H640V640H384V512h256V256h128v256zM256 1920h768v128H256q-26 0-49.5-10t-41-27.5-27.5-41-10-49.5V128q0-26 10-49.5t27.5-41 41-27.5T256 0h1115l421 421v501q-31-14-63-23t-65-13V475l-347-347H256v1792zm1792-512v640h-896v-640h144v-64q0-63 24-118.5t65-96.5 96.5-65 118.5-24 118.5 24 96.5 65 65 96.5 24 118.5v64h144zm-656 0h416v-64q0-43-16.5-81t-44.5-66-66-44.5-81-16.5-81 16.5-66 44.5-44.5 66-16.5 81v64zm528 128h-640v384h640v-384z'
    }
  ]
]

export default createIcon(jsx, 'eSIMLocked')
