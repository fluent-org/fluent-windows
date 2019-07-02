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
        'M2048 128v1664h-428q-2 0-4-1t-4-1L0 1394V128h2048zM171 1305l358 87-118-125 83-99 264 281 205 50-381-437 83-100 514 590 270 66-780-910zm469-793H384v128h175l81-98v-30zm1280-256H128v901l128-154V896h89l107-128H256V384h512v243l230 269h794v128h-684l110 128h574v128h-464l109 128h355v128h-245l110 128h263V256zm-128 256H896V384h896v128zm0 256H896V640h896v128z'
    }
  ]
]

export default createIcon(jsx, 'DuplexLandscapeTwoSidedLongEdge')
