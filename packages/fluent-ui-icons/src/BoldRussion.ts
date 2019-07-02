import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d:
        'M1828 1612h-311l-328-479q-7-9-14.5-23t-15.5-33h-4v535H895v-535q-7 9-14.5 23.5T863 1131l-42 60q-15 23-39 58t-59 86-82 119-108 158H221l425-580-393-531h299l309 466q10 14 17.5 26.5T892 1018V501h263v517h4q5-12 12.5-24.5T1189 967l309-466h299l-393 531z'
    }
  ]
]

export default createIcon(jsx, 'BoldRussion')
