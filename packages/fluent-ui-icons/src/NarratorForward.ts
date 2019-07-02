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
        'M640 0h1408v1024h-677l-411 410v-410H640V0zm1280 896V128H768v768h320v230l229-230h603zm-285 605l90-90 317 317-317 317-90-90 163-163h-518v-128h518zm-611 291v128h256v128H640v-128h256v-128H0V640h512v128H128v896h1024v128h-128zm768-640h128v256l-128-128v-128z'
    }
  ]
]

export default createIcon(jsx, 'NarratorForward')
