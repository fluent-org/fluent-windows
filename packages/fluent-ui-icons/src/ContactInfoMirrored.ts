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
        'M1308.04 1077q-64.996 33-117.492 81.5-52.497 48.5-89.495 108-36.997 59.5-56.996 128t-20 141.5h127.993q0-79 30.498-149t82.495-122 121.992-82.5q69.996-30.5 148.99-30.5t148.992 30.5q69.995 30.5 121.992 82.5t82.495 122 30.498 149h127.992q0-73-19.999-141.5t-56.996-128q-36.998-59.5-89.495-108-52.496-48.5-117.492-81.5 72.995-54 114.493-136 41.497-82 41.497-173 0-79-30.498-149t-82.495-122-121.992-82.5Q1615.02 384 1536.026 384t-148.991 30.5Q1317.04 445 1265.043 497t-82.495 122-30.498 149q0 91 41.497 173 41.498 82 114.493 136zm483.98-309q0 53-20.499 99.5-20.498 46.5-54.996 81t-80.995 55-99.494 20.5q-51.997 0-98.994-20.5t-81.495-55-54.997-81q-20.499-46.5-20.499-99.5 0-52 20.5-99 20.497-47 54.995-81.5t81.496-55 98.994-20.5q52.997 0 99.494 20.5t80.995 55 54.996 81.5q20.499 47 20.499 99zM.125 384v128H896.07V384H.125zM896.07 896H.125v128H896.07V896zm0 512H.125v128H896.07v-128z'
    }
  ]
]

export default createIcon(jsx, 'ContactInfoMirrored')
