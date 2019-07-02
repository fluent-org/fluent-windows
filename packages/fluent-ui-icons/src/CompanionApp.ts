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
        'M2017 1405q11 11 17 22t6 27q0 32-13.5 57t-50.5 25H942l-83-320h869V448H448v192h128q27 0 50 10t40.5 27.5T694 718t10 50v832q0 27-10 50t-27.5 40.5T626 1718t-50 10H128q-27 0-50-10t-40.5-27.5T10 1650t-10-50V768q0-27 10-50t27.5-40.5T78 650t50-10h192V448q0-27 10-50t27.5-40.5T398 330t50-10h1280q27 0 50 10t40.5 27.5T1846 398t10 50v800zM448 1600H256v64h192v-64zm128-832H128v768h448V768z'
    }
  ]
]

export default createIcon(jsx, 'CompanionApp')
