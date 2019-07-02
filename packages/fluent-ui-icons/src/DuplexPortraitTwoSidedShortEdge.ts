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
        'M1792 0v2032L128 1651V0h1664zM256 128v1285l217-261h-89v-128h196l107-128H384V768h1152v128H907l110 128h519v128h-410l110 128h300v128h-190l318 371V128H256zm453 1192l83-100 482 562 279 64-756-882-496 595 365 84-122-125 82-99 270 277 168 38zm187-680H384V256h512v384zM768 384H512v128h256V384zm768 0h-512V256h512v128zm0 256h-512V512h512v128z'
    }
  ]
]

export default createIcon(jsx, 'DuplexPortraitTwoSidedShortEdge')
