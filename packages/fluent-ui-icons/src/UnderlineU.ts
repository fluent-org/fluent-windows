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
        'M1285 1312q-24 26-54.5 45t-65.5 32.5-72.5 20-76.5 6.5q-63 0-123-18.5T788 1342q-42-33-65.5-76.5t-36-91.5-16-98-3.5-100V436h130v571q0 31 3 66t12.5 69 26 63 43.5 48q26 19 64 27.5t80 8.5q47 0 89-10.5t68-34.5q24-21 38-47t21-56.5 9-62 2-63.5V436h130v456q0 74-1.5 133.5t-10.5 109-29 93-57 84.5zm98 430H666v-130h717v130z'
    }
  ]
]

export default createIcon(jsx, 'UnderlineU')
