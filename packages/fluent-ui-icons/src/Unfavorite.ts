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
        'M1609 992q-125 0-234.5 44t-192 122.5-132.5 186-56 234.5l-610 469 248-794L0 768h784L1024 0l240 768h784l-313 240q-31-7-62.5-11.5T1609 992zm-9 160q93 0 174.5 35.5t142 96 96 142T2048 1600t-35.5 174.5-96 142-142 96T1600 2048t-174.5-35.5-142-96-96-142T1152 1600t35.5-174.5 96-142 142-96T1600 1152zm-320 448q0 66 25.5 124t69 101.5 101.5 69 124 25.5q47 0 92-13.5t84-39.5l-443-443q-26 39-39.5 84t-13.5 92zm587 176q26-39 39.5-84t13.5-92q0-66-25.5-124t-69-101.5-101.5-69-124-25.5q-47 0-92 13.5t-84 39.5z'
    }
  ]
]

export default createIcon(jsx, 'Unfavorite')
