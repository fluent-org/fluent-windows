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
        'M960 0q132 0 254.5 34.5t229.5 97 194.5 150 150 194.5 97 229.5T1920 960t-34.5 254.5-97 229.5-150 194.5-194.5 150-229.5 97T960 1920t-254.5-34.5-229.5-97-194.5-150-150-194.5-97-229.5T0 960t34.5-254.5 97-229.5 150-194.5 194.5-150 229.5-97T960 0zm0 1792q115 0 221-30t198.5-84 168.5-130 130-168.5 84-198.5 30-221-30-221-84-198.5T1548 372t-168.5-130-198.5-84-221-30-221 30-198.5 84T372 372 242 540.5 158 739t-30 221 30 221 84 198.5T372 1548t168.5 130 198.5 84 221 30zm62-1013q29 10 53 28t41 42 26.5 52 9.5 59q0 40-15 75t-41 61-61 41-75 15-75-15-61-41-41-61-15-75q0-31 9.5-59t26.5-52 41-42 53-28h-2V259h128v520h-2zm-62 245q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zm246-722q104 39 188.5 105t144 152 92 188 32.5 213q0 141-52.5 269.5T1458 1458l-91-91q81-81 125-186.5t44-220.5q0-90-27-173.5t-76-154-118-125-153-85.5zM256 960q0-111 32.5-213T381 559t144.5-152T714 302l44 120q-84 31-153 85.5t-118 125-76 154T384 960q0 115 44 220.5T553 1367l-91 91q-100-100-153-228.5T256 960z'
    }
  ]
]

export default createIcon(jsx, 'SpeedMedium')
