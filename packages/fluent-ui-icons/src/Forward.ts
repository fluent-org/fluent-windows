import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M2042 1024l-941 941-90-90 787-787H0V960h1798l-787-787 90-90z'
    }
  ]
]

export default createIcon(jsx, 'Forward')
