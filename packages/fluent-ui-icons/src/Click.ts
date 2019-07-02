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
        'M1909 1408h-584l201 436-425 196-206-448-383 377V11zm-553 374l-230-502h474L640 320v1344l296-291 228 497z'
    }
  ]
]

export default createIcon(jsx, 'Click')
