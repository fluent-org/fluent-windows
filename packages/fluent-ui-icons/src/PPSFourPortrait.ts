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
        'M1792 0v1920H128V0h1664zm-128 128H256v1664h1408V128zM384 1664V256h1152v1408H384zm1024-640h-384v512h384v-512zm-384-128h384V384h-384v512zm-512 0h384V384H512v512zm384 640v-512H512v512h384z'
    }
  ]
]

export default createIcon(jsx, 'PPSFourPortrait')
