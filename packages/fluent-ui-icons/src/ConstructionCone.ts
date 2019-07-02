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
        'M1650 1920h270v128H128v-128h270L846 128h356zM626 1536l-96 384h988L1102 256H946l-192 768h414l32 128H722l-64 256h606l32 128H626z'
    }
  ]
]

export default createIcon(jsx, 'ConstructionCone')
