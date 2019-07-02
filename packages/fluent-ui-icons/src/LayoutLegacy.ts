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
        'M1008 784h784v1008H336v-336H0V0h1008v784zm-896 560h224V784h560V112H112v1232zm1568 336V896H448v784h1232z'
    }
  ]
]

export default createIcon(jsx, 'LayoutLegacy')
