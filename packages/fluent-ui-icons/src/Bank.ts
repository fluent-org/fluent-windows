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
        'M1792 768v768q0 1 9 27.5t22.5 67l29.5 88.5 30 90.5 24.5 73 12.5 37.5H0q2-7 12.5-37.5t24.5-73 30-90.5l29.5-88.5 22.5-67 9-27.5V768H0V640l960-480 960 480v128h-128zM286 640h1348L960 303zm1250 128v768h128V768h-128zm-256 0v768h128V768h-128zm-256 0v768h128V768h-128zm-256 0v768h128V768H768zm-256 0v768h128V768H512zm-256 768h128V768H256v768zm1486 256l-42-128H220l-42 128h1564z'
    }
  ]
]

export default createIcon(jsx, 'Bank')
