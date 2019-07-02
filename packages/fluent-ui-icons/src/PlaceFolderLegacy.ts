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
      d: 'M896 0l896 896-896 896L0 896zM119 896l777 777 777-777-777-777z'
    }
  ]
]

export default createIcon(jsx, 'PlaceFolderLegacy')
