import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1920 896h128v256h-128v384H0V512h1920v384zm-128 512V640H128v768h1664z'
    }
  ]
]

export default createIcon(jsx, 'SettingsBattery')
