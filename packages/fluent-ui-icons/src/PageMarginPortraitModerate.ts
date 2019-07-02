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
        'M1792 0v2048H128V0h1664zm-512 1408V640H640v768h640zm-640 128v384h640v-384H640zm640-1024V128H640v384h640zm-1024 0h256V128H256v384zm0 896h256V640H256v768zm0 512h256v-384H256v384zm1408-384h-256v384h256v-384zm0-896h-256v768h256V640zm0-128V128h-256v384h256z'
    }
  ]
]

export default createIcon(jsx, 'PageMarginPortraitModerate')
