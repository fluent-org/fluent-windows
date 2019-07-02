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
        'M677 256h91v1536h-91l-384-384H0V640h293zm-37 219L347 768H128v512h219l293 293V475zm859 549l274 275-90 90-275-274-275 274-90-90 274-275-274-275 90-90 275 274 275-274 90 90z'
    }
  ]
]

export default createIcon(jsx, 'Mute')
