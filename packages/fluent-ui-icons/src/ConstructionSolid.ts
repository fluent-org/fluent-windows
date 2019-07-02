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
        'M1143 1490q9 21 9 46v384q0 27-10 50t-27.5 40.5-40.5 27.5-50 10-50-10-40.5-27.5T906 1970t-10-50v-354l-128-256v162q0 25-10 49t-27 41l-321 321q-37 37-90 37-27 0-50-10t-40.5-27.5T202 1842t-10-50q0-26 10-49.5t28-41.5l282-282V859zm137 558l140-281-121-122q-19-19-19-45t19-45 45-19 45 19l92 91 183-366 384 768h-768zM960 512q-40 0-75-15t-61-41-41-61-15-75 15-75 41-61 61-41 75-15 75 15 61 41 41 61 15 75-15 75-41 61-61 41-75 15zm316 737q2 8 3 15.5t1 15.5q0 32-16 61t-42 46L493 659q-19-19-45-19t-45 19-19 45v128q0 27-10 50t-27.5 40.5T306 950t-50 10-50-10-40.5-27.5T138 882t-10-50V640q0-32 15.5-61t42.5-46L19 365Q0 346 0 320t19-45 45-19 45 19l216 216 328-82q15 51 44.5 93.5t70 73 90 47.5T960 640q41 0 80-10t74-30z'
    }
  ]
]

export default createIcon(jsx, 'ConstructionSolid')
