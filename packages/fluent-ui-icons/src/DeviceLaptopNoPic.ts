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
        'M2000 1397q11 11 20 28.5t15 37 9.5 39 3.5 34.5q0 25-10.5 48t-28.5 41-41 28.5-48 10.5H256q-25 0-48-10.5t-41-28.5-28.5-41-10.5-48q0-15 3.5-34.5t9.5-39 15-37 20-28.5l208-208V384h1408v805zM512 1152h1152V512H512v640zm1408 381q0-4-1.5-11.5t-4-15-5-14.5-5.5-10l-203-202H475l-203 202q-3 3-5.5 10t-5 14.5-4 15-1.5 11.5l3 3h1658z'
    }
  ]
]

export default createIcon(jsx, 'DeviceLaptopNoPic')
