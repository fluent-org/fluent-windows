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
        'M1016 1592l72 72H128q-25 0-48-10.5T39 1625t-28.5-41T0 1536q0-16 3.5-36t10-39 16-36.5T51 1395l205-206V384h1408v805l-91 91H347l-203 202q-3 3-6 10.5t-5.5 15.5-3.5 16-1 12h945zm-632-440h1152V512H384v640zm1645 158l-557 557-269-269 90-91 179 179 467-467z'
    }
  ]
]

export default createIcon(jsx, 'LaptopSelected')
