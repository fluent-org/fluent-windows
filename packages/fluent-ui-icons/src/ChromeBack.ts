import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M2048 1024H392l674 674-144 145L0 922 922 0l144 145-674 674h1656v205z'
    }
  ]
]

export default createIcon(jsx, 'ChromeBack')
