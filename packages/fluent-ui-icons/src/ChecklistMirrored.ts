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
        'M0 896V768h1408v128H0zm0-384V384h1408v128H0zm0 768v-128h1408v128H0zm0 384v-128h1408v128H0zM2029 349l-301 301-173-173 90-90 83 82 211-210zm-301 504l211-210 90 90-301 301-173-173 90-90zm0 384l211-210 90 90-301 301-173-173 90-90zm0 384l211-210 90 90-301 301-173-173 90-90z'
    }
  ]
]

export default createIcon(jsx, 'ChecklistMirrored')
