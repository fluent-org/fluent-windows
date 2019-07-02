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
        'M960 1280q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zm0-256q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zm0-256q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zm576 1152v128H384v-128h512v-256H512V0h896v1664h-384v256h512zm-896-384h640V128H640v1408z'
    }
  ]
]

export default createIcon(jsx, 'MediaStorageTower')
