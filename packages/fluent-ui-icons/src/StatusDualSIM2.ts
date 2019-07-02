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
        'M165 486q-6 6-10.5 12.5T145 512h239v128H0v-64q0-52 19-94t47.5-77 61.5-64 61.5-54 47.5-48 19-47q0-26-19-45t-45-19-45 19-19 45H0q0-40 15-75t41-61 61-41 75-15 75 15 61 41 41 61 15 75q0 38-15 73.5T328 328h-1z'
    }
  ]
]

export default createIcon(jsx, 'StatusDualSIM2')
