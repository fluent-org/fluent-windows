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
      d: 'M112 112h784v784H112V112zm672 672V224H224v560h560z'
    }
  ]
]

export default createIcon(jsx, 'ShowAllFiles1Legacy')
