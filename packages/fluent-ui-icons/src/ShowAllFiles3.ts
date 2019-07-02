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
        'M896 128h896v1664H128V896h768V128zm0 1536v-640H256v640h640zm768 0v-640h-640v640h640zm-640-768h640V256h-640v640z'
    }
  ]
]

export default createIcon(jsx, 'ShowAllFiles3')
