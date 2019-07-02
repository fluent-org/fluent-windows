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
        'M784 112h896v1568H112V784h336V560H112V112h448v336h224V112zm112 112v224h224V224H896zM224 448h224V224H224v224zm336 112v224h224V560H560zM224 896v224h224V896H224zm1344 672V224h-336v336H896v336H560v336H224v336h1344z'
    }
  ]
]

export default createIcon(jsx, 'ResolutionLegacy')
