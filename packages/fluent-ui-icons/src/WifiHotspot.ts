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
        'M896 640h128v1408H896V640zM372 244q-58 58-103.5 126.5T192 514t-47.5 155.5T128 832t16.5 162.5T192 1150t76.5 143.5T372 1420l-91 91q-136-137-208.5-311.5T0 832t72.5-367.5T281 153zm1267-91q136 137 208.5 311.5T1920 832t-72.5 367.5T1639 1511l-91-91q58-58 103.5-126.5T1728 1150t47.5-155.5T1792 832t-16.5-162.5T1728 514t-76.5-143.5T1548 244zm-272 272q81 81 125 186.5t44 220.5-44 220.5-125 186.5l-90-90q63-63 96.5-145.5T1407 832t-33.5-171.5T1277 515zm-724 90q-63 63-97 145.5T512 832t34 171.5 97 145.5l-90 90q-81-81-125-186.5T384 832t44-220.5T553 425z'
    }
  ]
]

export default createIcon(jsx, 'WifiHotspot')
