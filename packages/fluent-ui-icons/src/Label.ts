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
        'M1720 128q41 0 77 16t63 43 43 63.5 16 77.5q0 37-10.5 65.5T1880 446t-41 46-47 46v1254H256V256h1254q24-24 46.5-47t46.5-41 52-29 65-11zm0 128q-29 0-50 21l-948 948-34 135 135-34 948-948q21-21 21-50 0-30-21.5-51t-50.5-21zm-56 410l-775 776-377 94 94-377 776-775H384v1280h1280V666z'
    }
  ]
]

export default createIcon(jsx, 'Label')
