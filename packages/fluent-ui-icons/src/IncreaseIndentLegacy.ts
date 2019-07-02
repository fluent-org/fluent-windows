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
        'M896 336h896v112H896V336zm0 1008v-112h896v112H896zm0-448V784h896v112H896zm672-336v112H896V560h672zm0 448v112H896v-112h672zM422.625 641.375l78.75-78.75L778.75 840l-277.375 277.375-78.75-78.75L565.25 896H0V784h565.25z'
    }
  ]
]

export default createIcon(jsx, 'IncreaseIndentLegacy')
