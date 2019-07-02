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
        'M1874 1528q46 57 46 136 0 27-10 50t-27.5 40.5-40.5 27.5-50 10H128q-27 0-50-10t-40.5-27.5T10 1714t-10-50q0-79 46-136l2-3 245-245h1334l245 245zM768 1152H256V128h1408v1024h-512v-128h384V256H384v768h384v128zm1024 512q0-32-16-54l-203-202H347l-203 202q-16 22-16 54h1664zm-896-512V731l-83 82-90-90 237-237 237 237-90 90-83-82v421H896z'
    }
  ]
]

export default createIcon(jsx, 'DetachablePC')
