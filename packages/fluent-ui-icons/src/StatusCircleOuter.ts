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
        'M960 128q132 0 254.5 34.5t229.5 97 194.5 150 150 194.5 97 229.5T1920 1088t-34.5 254.5-97 229.5-150 194.5-194.5 150-229.5 97T960 2048t-254.5-34.5-229.5-97-194.5-150-150-194.5-97-229.5T0 1088t34.5-254.5 97-229.5 150-194.5 194.5-150 229.5-97T960 128z'
    }
  ]
]

export default createIcon(jsx, 'StatusCircleOuter')
