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
        'M1582 1490H466q-96 0-181-37t-148-100-100-148-37-181 37-181 100-148 148-100 181-37h1116q96 0 181 37t148 100 100 148 37 181-37 181-100 148-148 100-181 37z'
    }
  ]
]

export default createIcon(jsx, 'ToggleFilled')
