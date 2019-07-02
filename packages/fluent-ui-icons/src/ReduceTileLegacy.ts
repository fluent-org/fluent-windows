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
        'M0 224h1680v1232H0V224zm1568 1120V336H896v112H784V336H112v1008h672v-112h112v112h672zm-560-446.25v-112h277.375l-83.125-84 59.5-59.5 197.75 199.5-197.75 196-59.5-59.5 81.375-80.5H1008zM784 784V560h112v224H784zm0 336V896h112v224H784z'
    }
  ]
]

export default createIcon(jsx, 'ReduceTileLegacy')
