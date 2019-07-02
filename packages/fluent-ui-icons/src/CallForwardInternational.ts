import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M0 1792L768 256l768 1536H0zM1581 211l365 365-365 365-90-90 210-211h-549V512h549l-210-211z'
    }
  ]
]

export default createIcon(jsx, 'CallForwardInternational')
