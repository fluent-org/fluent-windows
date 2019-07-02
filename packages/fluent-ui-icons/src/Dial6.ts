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
        'M1084 767q105 0 187.5 39T1411 912t86.5 155.5T1527 1256q0 108-33.5 204.5t-96 169-152.5 115-204 42.5q-97 0-171-32t-128.5-86-90.5-126-57.5-152.5T563 1226t-9-163q0-99 13-205.5T610 649t78-193 118.5-160T971 186.5t215-40.5q63 0 125.5 9t121.5 34v140q-57-29-119.5-44T1187 270q-94 0-166 33t-126.5 89T803 522t-60 155-33 164.5-10 158.5h5q58-118 153-175.5t226-57.5zm-35 897q80 0 142-32.5t104-86.5 64-123.5 22-143.5q0-78-19.5-148t-60-123-102.5-84.5-147-31.5q-72 0-133.5 28.5T811 996t-72 111.5-26 133.5q0 74 21 149.5t63 136 105 99 147 38.5z'
    }
  ]
]

export default createIcon(jsx, 'Dial6')
