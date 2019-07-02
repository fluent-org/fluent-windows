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
        'M768 384q0 80-30 149.5t-82.5 122T533 738t-149 30q-80 0-149.5-30t-122-82.5-82.5-122T0 384q0-79 30-149t82.5-122.5 122-82.5T384 0q79 0 149 30t122.5 82.5T738 235t30 149zM384 640q53 0 99.5-20t81.5-55 55-81.5 20-99.5-20-99.5-55-81.5-81.5-55-99.5-20-99.5 20-81.5 55-55 81.5-20 99.5 20 99.5 55 81.5 81.5 55 99.5 20zm1152 512q79 0 149 30t122.5 82.5T1890 1387t30 149q0 80-30 149.5t-82.5 122T1685 1890t-149 30q-80 0-149.5-30t-122-82.5-82.5-122-30-149.5q0-79 30-149t82.5-122.5 122-82.5 149.5-30zm0 640q53 0 99.5-20t81.5-55 55-81.5 20-99.5-20-99.5-55-81.5-81.5-55-99.5-20-99.5 20-81.5 55-55 81.5-20 99.5 20 99.5 55 81.5 81.5 55 99.5 20zM1512 0L552 1920H408L1368 0h144z'
    }
  ]
]

export default createIcon(jsx, 'CalculatorPercentage')
