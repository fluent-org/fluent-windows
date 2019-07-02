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
        'M512 1792H256v-128h256v128zm640 0v128h256v128H0V896h128V512h1920v1280h-896zm-491-789H107v938h554v-938zm363 789H768v128h256v-128zm896-128V640H256v256h512v768h1152z'
    }
  ]
]

export default createIcon(jsx, 'Connect')
