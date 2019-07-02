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
        'M1344 1510l339-339 90 90-429 429-237-237 90-90zm704-742v1280H768v-781q-61 13-128 13-133 0-249.5-50T187 1093 50 889.5 0 640t50-249.5T187 187 390.5 50 640 0t249.5 50T1093 187t137 203.5 50 249.5q0 67-13 128h781zM128 640q0 106 40.5 199t110 162.5 162.5 110 199 40.5 199-40.5 162.5-110 110-162.5 40.5-199-40.5-199-110-162.5-162.5-110T640 128t-199 40.5-162.5 110-110 162.5T128 640zm1792 256h-693q-51 113-134.5 196.5T896 1227v693h1024V896zm-915-403L576 922 339 685l90-90 147 147 339-339z'
    }
  ]
]

export default createIcon(jsx, 'PassiveAuthentication')
