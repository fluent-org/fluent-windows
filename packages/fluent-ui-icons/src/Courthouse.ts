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
        'M1792 896v768l9 27 22.5 67.5 29.5 88.5 30 90.5 24.5 73.5 12.5 37H0q2-6 12.5-37t24.5-73.5 30-90.5l29.5-88.5L119 1691l9-27V896H0V768l896-448V0h383v256h-255v64l896 448v128h-128zM286 768h1348L960 431zm226 896h128V896H512v768zm256 0h128V896H768v768zm256 0h128V896h-128v768zm256 0h128V896h-128v768zm-1024 0h128V896H256v768zm1486 256l-42-128H220l-42 128h1564zm-78-1024h-128v768h128V896z'
    }
  ]
]

export default createIcon(jsx, 'Courthouse')
