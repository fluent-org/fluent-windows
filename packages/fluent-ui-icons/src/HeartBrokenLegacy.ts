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
        'M1505 128q75 0 144.5 19.5T1779 202t110 85 85 110 54.5 129.5T2048 671q0 108-41.5 208T1889 1055l-865 865-865-865Q83 979 41.5 879T0 671q0-75 19.5-144.5T74 397t85-110 110-85 129.5-54.5T543 128q109 0 211.5 43T933 293L651 576l448 448-294 293 91 91 384-384-448-448q49-49 97-101.5t97-102 102-94 111-78 124-53 142-19.5z'
    }
  ]
]

export default createIcon(jsx, 'HeartBrokenLegacy')
