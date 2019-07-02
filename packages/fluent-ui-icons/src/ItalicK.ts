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
        'M957 1019l410 594h-172l-358-537q-2-2-6.5-9.5T821 1052q-5-9-12-20l-132 581H514L776 435h163L820 989q10-9 19-17l14-14 9-9 543-514h187z'
    }
  ]
]

export default createIcon(jsx, 'ItalicK')
