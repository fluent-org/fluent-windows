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
        'M0 256h1920v1408H0V256zm1792 1280V384h-768v128H896V384H128v1152h768v-128h128v128h768zm-640-510V898h317l-95-96 68-68 226 228-226 224-68-68 93-92h-315zM896 896V640h128v256H896zm0 384v-256h128v256H896z'
    }
  ]
]

export default createIcon(jsx, 'ReduceTile')
