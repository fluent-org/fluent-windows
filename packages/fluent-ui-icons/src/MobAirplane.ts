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
        'M1664 768q53 0 99.5 20t81.5 55 55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20h-376l-256 512H638l128-512H583l-63 128H57l191-384L57 640h463l63 128h183L638 256h394l256 512h376zm0 384q27 0 50-10t40.5-27.5 27.5-40.5 10-50-10-50-27.5-40.5T1714 906t-50-10h-455L953 384H802l128 512H504l-63-128H264l128 256-128 256h177l63-128h426l-128 512h151l256-512h455z'
    }
  ]
]

export default createIcon(jsx, 'MobAirplane')
