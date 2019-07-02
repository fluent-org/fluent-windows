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
        'M128 1792q0 27 10 50t27.5 40.5T206 1910t50 10h1152v128H256q-53 0-99.5-20T75 1973t-55-81.5T0 1792V256q0-49 21.5-95.5t57-82 81.5-57T256 0h1408v1024h-128V128H256q-23 0-46 11.5T169 169t-29.5 41-11.5 46v1314q58-34 128-34h768v128H256q-27 0-50 10t-40.5 27.5T138 1742t-10 50zM384 768V384h896v384H384zm128-128h640V512H512v128zm1536 1024h-384v384h-128v-384h-384v-128h384v-384h128v384h384v128z'
    }
  ]
]

export default createIcon(jsx, 'DictionaryAdd')
