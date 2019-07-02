import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    width: '1792',
    height: '1792'
  },
  [
    'path',
    {
      d:
        'M784 672l336 168-336 168V672zm56-336h952v1008H840l224-112h616V448h-616zM0 1344V336h672v112H112v784h560v112H0z'
    }
  ]
]

export default createIcon(jsx, 'PlayOnLegacy')
