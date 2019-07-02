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
        'M768 768H256V384h512v384zM640 512H384v128h256V512zm1365-384l-485 1664H0V128h2005zM128 1664h1167l-153-128H256v-128h732l-156-128H256v-128h425l-76-63 75-65H256V896h574l149-128h-83V640h232l150-128H896V384h531l149-128H128v1408zM1835 256h-62l-970 831 635 529 54-185-405-377 98-83 347 323 44-150-288-262 98-83 229 208 37-123-174-165 98-83 116 109z'
    }
  ]
]

export default createIcon(jsx, 'DuplexLandscapeTwoSidedShortEdge')
