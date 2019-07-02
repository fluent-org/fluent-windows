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
        'M1115 1792h421v128H453L50 1516q-24-24-37-56.5T0 1392t13-67.5 38-57.5L1248 69l794 795zm133-1542L538 960l614 613 709-709zM933 1792l128-128-613-614-306 307q-14 14-14 35t14 35l364 365h427z'
    }
  ]
]

export default createIcon(jsx, 'EraseTool')
