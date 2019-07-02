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
        'M128 486l666 666-666 666V486zm128 1024l358-358-358-358v716zM1792 256v1536h128v128h-640v-128h128v-768h-192q-93 0-174.5-35T899 893t-96-142.5T768 576t35-174.5T899 259t142.5-96 174.5-35h704v128h-128zm-384 640V256h-192q-66 0-124.5 25.5t-102 69T921 452t-25 124 25 124.5 68.5 102 102 68.5 124.5 25h192zm256 896V256h-128v1536h128z'
    }
  ]
]

export default createIcon(jsx, 'BidiLtr')
