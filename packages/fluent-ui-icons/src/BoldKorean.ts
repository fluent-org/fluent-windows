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
        'M374 436h720q0 144-16 265t-49.5 224.5-83 190.5-118 162.5-154.5 141T480 1547q-35-45-80-92.5t-91-84.5q80-22 151-63t131-96 108-122 81.5-142 51-154.5T849 631H374V436zm1308-131l-130 126v528h194v195h-194v589h-197V305h327z'
    }
  ]
]

export default createIcon(jsx, 'BoldKorean')
