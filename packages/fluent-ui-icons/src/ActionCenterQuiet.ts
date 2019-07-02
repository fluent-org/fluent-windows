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
        'M2048 0v1189q-28-31-60.5-57.5T1920 1083V128H128v1408h565l422 421-91 91-384-384H0V0h2048zm-403 1157q85 8 159 46t128 97.5 85 136.5 31 163q0 93-35 174.5t-96 142.5-142.5 96-174.5 35q-75 0-143.5-24t-125-66.5-98-102T1171 1724q11 1 22.5 2.5t22.5 1.5q93 0 174.5-35.5t142-96 96-142T1664 1280q0-32-5.5-62.5T1645 1157zm-45 763q66 0 124.5-25t102-68.5 68.5-102 25-124.5q0-79-34-144t-97-113q-10 86-44 164t-87 142-123.5 111-153.5 72q45 42 101 65t118 23z'
    }
  ]
]

export default createIcon(jsx, 'ActionCenterQuiet')
