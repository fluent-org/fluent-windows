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
        'M896 336h896v112H896V336zm0 1008v-112h896v112H896zm0-448V784h896v112H896zm672-336v112H896V560h672zm0 448v112H896v-112h672zM361.375 641.375L218.75 784H784v112H218.75l142.625 142.625-78.75 78.75L5.25 840l277.375-277.375z'
    }
  ]
]

export default createIcon(jsx, 'DecreaseIndentLegacy')
