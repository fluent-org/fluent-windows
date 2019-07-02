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
        'M640 1536h256v128H640v-128zM128 384v896h768v128H0V256h1920v128H128zm1920 768v512H1024v-512h1024zm-128 128h-768v256h768v-256zm23-471q-81-81-186.5-125T1536 640t-220.5 43.5T1129 809l-91-91q100-100 229-153t269-53 269 53 229 153zm-724 90q64-63 145.5-97t171.5-34 171.5 34 145.5 97l-91 91q-45-45-103.5-69.5T1536 896t-122.5 24.5T1310 990z'
    }
  ]
]

export default createIcon(jsx, 'Dock')
