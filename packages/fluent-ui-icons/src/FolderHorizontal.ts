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
        'M608 256q45 0 77.5 9.5t58 23.5 45.5 31 40.5 31 44 23.5T928 384h992q27 0 50 10t40.5 27.5T2038 462t10 50v1280H0V384q0-27 10-50t27.5-40.5T78 266t50-10h480zM128 384v128h480q24 0 42-4.5t33-13 29.5-20T744 448q-17-15-31.5-26.5t-29.5-20-33-13-42-4.5H128zm1792 128H928q-31 0-54.5 9.5t-44 23.5-40.5 31-45.5 31-58 23.5T608 640H128v1024h1792V512z'
    }
  ]
]

export default createIcon(jsx, 'FolderHorizontal')
