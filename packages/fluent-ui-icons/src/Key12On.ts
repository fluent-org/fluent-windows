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
        'M89 181h958q-6 239-75.5 442T781 997t-288 311.5T125 1563L2 1434q171-70 314.5-180T579 1004q255-297 298-682H89V181zm1830 662v141h-367v1063h-159l1-2047h158v843h367z'
    }
  ]
]

export default createIcon(jsx, 'Key12On')
