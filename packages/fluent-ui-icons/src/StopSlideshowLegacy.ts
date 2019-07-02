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
        'M0 224h1792v1344H0V224zm1680 1232V336H112v1120h1568zM1568 448v896H224V448h1344zm-112 784V560H336v672h1120zm-336-560v448H672V672h448zm-112 336V784H784v224h224z'
    }
  ]
]

export default createIcon(jsx, 'StopSlideshowLegacy')
