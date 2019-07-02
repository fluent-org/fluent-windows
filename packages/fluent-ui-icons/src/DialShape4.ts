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
        'M1920 1088l-832 960-832-960L1088 0zm-768 125l560-187-560-731v918zm-128-918l-560 731 560 187V295zm-526 877l526 607v-432zm654 607l526-607-526 175v432z'
    }
  ]
]

export default createIcon(jsx, 'DialShape4')
