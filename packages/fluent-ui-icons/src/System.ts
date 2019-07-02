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
        'M2000 1525q12 12 21 29t15 36 9 38.5 3 35.5q0 27-10 50t-27.5 40.5-40.5 27.5-50 10H128q-27 0-50-10t-40.5-27.5T10 1714t-10-50q0-16 3-35.5t9-38.5 15-36 21-29l208-208V384h1536v933zM384 1280h1280V512H384v768zm1536 384q0-11-4-28.5t-12-25.5l-203-202H347l-203 202q-8 8-12 25.5t-4 28.5h1792z'
    }
  ]
]

export default createIcon(jsx, 'System')
