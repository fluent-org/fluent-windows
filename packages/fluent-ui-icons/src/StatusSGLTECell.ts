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
        'M514 404q22 0 37 15l74 74q15 15 15 37 0 21-15 36l-32 32-29 23-33 14-44 5q-52 0-108.5-21.5T268 560t-102.5-85.5T80 372 21.5 261.5 0 153q0-26 5-44t14-33 23-29l32-32Q89 0 110 0q22 0 37 15l74 74q15 15 15 37 0 18-10.5 31T202 181t-23.5 24-10.5 31q0 20 16 36l184 184q16 16 36 16 18 0 31-10.5t24-23.5 24-23.5 31-10.5z'
    }
  ]
]

export default createIcon(jsx, 'StatusSGLTECell')
