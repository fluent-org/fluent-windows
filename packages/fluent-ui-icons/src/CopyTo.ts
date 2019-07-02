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
        'M2048 1536h-256v384q0 27-10 50t-27.5 40.5-40.5 27.5-50 10H128V128h640V0h731l549 549v987zM1792 512h37l-37-37v37zm-896 640h128V256h549l-128-128H896v1024zm-640 768h1152v-384h-384v-256H768V256H256v1664zm1408-384h-128v384h128v-384zm256-128V640h-256V384h-512v1024h768z'
    }
  ]
]

export default createIcon(jsx, 'CopyTo')
