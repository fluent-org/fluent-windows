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
        'M475 512h1573v128H475l210 211-90 90-365-365 365-365 90 90zM128 256v640H0V256h128zm1235 941l90-90 365 365-365 365-90-90 210-211H0v-128h1573zm557 595v-640h128v640h-128z'
    }
  ]
]

export default createIcon(jsx, 'HorizontalTabKey')
