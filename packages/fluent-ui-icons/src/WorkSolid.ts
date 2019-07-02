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
        'M1229 1280q24 0 35-13t14.5-31.5 2.5-39.5-1-36l768-384v888H0V776l768 384q0 15-1 36t2.5 39.5T784 1267t35 13h410zm819-896v248l-768 384q0-15 1-36t-2.5-39.5T1264 909t-35-13H819q-24 0-35 13t-14.5 31.5T767 980t1 36L0 632V384h640V256q0-27 10-50t27.5-40.5T718 138t50-10h512q27 0 50 10t40.5 27.5T1398 206t10 50v128h640zm-768 0V256H768v128h512zm-128 640v128H896v-128h256z'
    }
  ]
]

export default createIcon(jsx, 'WorkSolid')
