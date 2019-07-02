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
        'M0 0h2048v2048H0V0zm1920 640V128h-512v512h512zM768 1280h512V768H768v512zm512 128H768v512h512v-512zm-640-128V768H128v512h512zm128-640h512V128H768v512zm640 128v512h512V768h-512zM640 128H128v512h512V128zM128 1408v512h512v-512H128zm1280 512h512v-512h-512v512z'
    }
  ]
]

export default createIcon(jsx, 'TiltDown')
