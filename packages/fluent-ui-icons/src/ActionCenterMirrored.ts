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
        'M2048 0H.12v1664h639.961l383.977 384 383.977-384h639.961V0zM128.117 1536V128h1791.89v1408h-564.966l-330.979 331-330.979-331H128.117z'
    }
  ]
]

export default createIcon(jsx, 'ActionCenterMirrored')
