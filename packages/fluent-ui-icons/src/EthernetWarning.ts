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
        'M1408 1728v-320h128v320h-128zm0 192v-128h128v128h-128zm-512 128l576-1152 576 1152H896zm181-112h790l-395-790zM0 256h2048v1152h-141l-64-128h77V384H640v640H384v256h717l-64 128H384v384H256v-768H0V256zm512 640V640H384v128H256V640H128v256h384zm0-384V384H128v128h384zm128 1152h269l-64 128H640v-128z'
    }
  ]
]

export default createIcon(jsx, 'EthernetWarning')
