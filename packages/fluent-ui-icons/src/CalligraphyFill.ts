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
        'M1600 0v448H448V0h1152zM608 1280h832l-288 576q0 27-10 50t-27.5 40.5-40.5 27.5-50 10-50-10-40.5-27.5T906 1906t-10-50z'
    }
  ]
]

export default createIcon(jsx, 'CalligraphyFill')
