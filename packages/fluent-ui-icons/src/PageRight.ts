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
        'M1029 256q-105 0-202.5 27.5t-182.5 77-154.5 119-119 154.5-77 182.5T266 1019t27.5 202.5 77 182.5 119 154.5 154.5 119 182.5 77T1029 1782t202.5-27.5 182.5-77 154.5-119 119-154.5 77-182.5T1792 1019t-27.5-202.5-77-182T1568 480t-154.5-119.5-182-77T1029 256zm0-128q123 0 236.5 32t212.5 90 180.5 139.5T1798 570t90 212.5 32 236.5-32 236.5-90 212.5-139.5 180.5T1478 1788t-212.5 90-236.5 32-236.5-32-212.5-90-180.5-139.5T260 1468t-90-212.5-32-236.5 32-236.5T260 570t139.5-180.5T580 250t212.5-90 236.5-32zm-88 1357l-90-90 370-371-370-371 90-90 461 461z'
    }
  ]
]

export default createIcon(jsx, 'PageRight')
