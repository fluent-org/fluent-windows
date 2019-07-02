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
        'M1347 501q-22 83-64 168t-96 167.5T1070.5 996 944 1139q-247 263-603 407l-105-87q306-102 528-300 62-54 120-114.5T993 918t91.5-137 66.5-149H563l64-131h720zm-196 1242h-131l654-1307h196l-130 130-229 458h277l-65 130h-278z'
    }
  ]
]

export default createIcon(jsx, 'ItalicKorean')
