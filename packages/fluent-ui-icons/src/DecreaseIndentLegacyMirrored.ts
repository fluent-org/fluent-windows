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
        'M901.3025 336H5.355v112h895.9475V336zm0 1008v-112H5.355v112h895.9475zm0-448V784H5.355v112h895.9475zm-671.958-336v112h671.958V560h-671.958zm0 448v112h671.958v-112h-671.958zm1206.5567-366.625L1578.5175 784h-565.2168v112h565.2168l-142.6163 142.625 78.7448 78.75L1792.0035 840 1514.646 562.625z'
    }
  ]
]

export default createIcon(jsx, 'DecreaseIndentLegacyMirrored')
