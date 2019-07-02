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
        'M784 112h784v1456H112V784h672V112zm0 1344V896H224v560h560zm672 0V896H896v560h560zM896 784h560V224H896v560z'
    }
  ]
]

export default createIcon(jsx, 'ShowAllFiles3Legacy')
