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
        'M640 1792V256h384v1536H640zM768 384v1280h128V384H768zM128 1792V256h384v1536H128zM256 384v1280h128V384H256zm1235-151l484 1450-346 116-484-1450zm-204 186l412 1238 134-44-413-1238z'
    }
  ]
]

export default createIcon(jsx, 'Library')
