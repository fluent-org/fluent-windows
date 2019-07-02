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
        'M640 896h640v128H640V896zM256 640q-27 0-50-10t-40.5-27.5T138 562t-10-50 10-50 27.5-40.5T206 394t50-10 50 10 40.5 27.5T374 462t10 50-10 50-27.5 40.5T306 630t-50 10zm0 640h160l-160 512H128zM1585 0q164 206 249 451.5t85 508.5-85 508.5-249 451.5h-168q91-98 160.5-210t117-234.5 72-252T1791 960q0-133-24.5-263t-72-252.5-117-234.5T1417 0h168z'
    }
  ]
]

export default createIcon(jsx, 'EmojiTabTextSmiles')
