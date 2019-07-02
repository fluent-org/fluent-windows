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
        'M1591 1406q26 0 45 19t19 45q0 16-5.5 26.5T1633 1518q-17 17-36.5 33t-39.5 32q-101 81-212 146.5T1113 1843q-83 33-169.5 55T766 1920q-117 0-211.5-43t-161-117-102-174-35.5-213q0-77 17.5-158t47.5-162 71-159.5 89-152 100-139T685 482q91-95 196.5-174T1105 171q36-17 74-30t80-13q49 0 85 17.5t60 48 36 71 12 85.5q0 23-2.5 46t-7.5 46q-17 83-49.5 161.5t-77 151.5T1215 893t-119 119q-109 94-238 156t-271 87q-26 5-53 8.5t-53 3.5-47-16-21-44q0-29 15.5-46.5T473 1139q31-4 59-7.5t55-8.5 54-11.5 57-16.5q114-38 215.5-105T1096 835t138.5-194.5T1317 416q7-31 7-68 0-16-2.5-32.5t-9.5-30-19.5-21.5-32.5-8q-25 0-51 9.5t-48 20.5q-108 53-204.5 126t-180 161T623 760.5 499 966q-49 95-82 197.5T384 1374q0 87 25.5 163t74.5 132.5 120 89.5 162 33q76 0 152-19t147-48q107-43 205.5-100.5T1460 1497q23-18 44-37t44-37q11-8 20-12.5t23-4.5z'
    }
  ]
]

export default createIcon(jsx, 'HWPOverwrite')
