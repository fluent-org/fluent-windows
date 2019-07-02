import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1536 512v1024H512V512h1024z'
    }
  ]
]

export default createIcon(jsx, 'CheckboxIndeterminate')
