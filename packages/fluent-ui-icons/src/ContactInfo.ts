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
        'M740 1077q65 33 117.5 81.5t89.5 108 57 128 20 141.5H896q0-79-30.5-149T783 1265t-122-82.5-149-30.5-149 30.5-122 82.5-82.5 122-30.5 149H0q0-73 20-141.5t57-128 89.5-108T284 1077q-73-54-114.5-136T128 768q0-79 30.5-149T241 497t122-82.5T512 384t149 30.5T783 497t82.5 122T896 768q0 91-41.5 173T740 1077zM256 768q0 53 20.5 99.5t55 81 81 55T512 1024q52 0 99-20.5t81.5-55 55-81T768 768q0-52-20.5-99t-55-81.5-81.5-55-99-20.5q-53 0-99.5 20.5t-81 55-55 81.5-20.5 99zm1792-384v128h-896V384h896zm-896 512h896v128h-896V896zm0 512h896v128h-896v-128z'
    }
  ]
]

export default createIcon(jsx, 'ContactInfo')
