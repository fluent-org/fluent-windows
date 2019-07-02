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
        'M896 1536h128v128H896v-128zm64-960q66 0 124 25.5t101.5 69 69 101.5 25.5 124q0 60-19 104.5t-47.5 80.5-61.5 65.5-61.5 59-47.5 63-19 75.5v64H896v-64q0-60 19-104.5t47.5-80.5 61.5-65.5 61.5-59T1133 972t19-76q0-40-15-75t-41-61-61-41-75-15-75 15-61 41-41 61-15 75H640q0-66 25-124t68.5-101.5 102-69T960 576z'
    }
  ]
]

export default createIcon(jsx, 'StatusCircleQuestionMark')
