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
        'M128 128h1664v1664H128V128zm1536 768V256h-640v640h640zM896 256H256v640h640V256zm-640 768v640h640v-640H256zm768 640h640v-640h-640v640z'
    }
  ]
]

export default createIcon(jsx, 'ViewAll')
