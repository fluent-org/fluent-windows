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
        'M1402 390q126 128 194 291t68 343-68 343-194 291l-91-91q109-109 167-249t58-294-58-294-167-249zm-272 272q73 73 111.5 166t38.5 196-38.5 196-111.5 166l-90-90q54-54 83-124.5t29-147.5-29-147.5-83-124.5zM677 256h91v1536h-90l-385-384H0V640h293zm-37 219L347 768H128v512h219l293 293V475z'
    }
  ]
]

export default createIcon(jsx, 'Volume2')
