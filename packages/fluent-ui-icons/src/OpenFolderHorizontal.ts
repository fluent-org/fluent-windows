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
        'M1920 768q26 0 49.5 10t41 27.5T2038 846t10 49q0 30-14 58l-419 839H0V384q0-27 10-50t27.5-40.5T78 266t50-10h352q45 0 77.5 9.5t58 23.5 45.5 31 40.5 31 44 23.5T800 384h736q27 0 50 10t40.5 27.5T1654 462t10 50v256h256zM128 1457l309-618q17-33 47.5-52t67.5-19h984V512H800q-45 0-77.5-9.5t-58-23.5-45.5-31-40.5-31-44-23.5T480 384H128v1073zm1792-561H552l-384 768h1368z'
    }
  ]
]

export default createIcon(jsx, 'OpenFolderHorizontal')
