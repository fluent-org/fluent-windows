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
        'M2048 65v1983h-255V735q0-98 5.5-195.5T1812 344h-6q-11 51-24.5 101.5T1747 544l-654 1504H951L298 556q-22-50-34.5-104.5T239 344h-7q9 100 11 200.5t2 201.5v1302H0V65h347l585 1360q26 59 49.5 119.5T1020 1668h9q23-63 45.5-125.5T1123 1419L1718 65h330z'
    }
  ]
]

export default createIcon(jsx, 'PinyinIMELogo')
