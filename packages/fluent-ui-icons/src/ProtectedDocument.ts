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
        'M1920 1280v768h-896v-768h128q0-76 17.5-145.5t56-122.5 99-84.5T1472 896t147.5 31.5 99 84.5 56 122.5T1792 1280h128zm-640 0h384v-64q0-40-15-75t-41-61-61-41-75-15-75 15-61 41-41 61-15 75v64zm512 128h-640v512h640v-512zM384 1920h512v128H256V293L549 0h1243v860q-29-26-61-47t-67-37V128H603L384 347v1573z'
    }
  ]
]

export default createIcon(jsx, 'ProtectedDocument')
