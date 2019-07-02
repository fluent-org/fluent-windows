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
        'M576 896q119 0 224 45.5T983 1065t123.5 183 45.5 224-45.5 224T983 1879t-183 123.5-224 45.5-224-45.5T169 1879 45.5 1696 0 1472t45.5-224T169 1065t183-123.5T576 896zm464 576q0-96-36.5-180.5T904 1144t-147.5-99.5T576 1008t-180.5 36.5T248 1144t-99.5 147.5T112 1472t36.5 180.5T248 1800t147.5 99.5T576 1936t180.5-36.5T904 1800t99.5-147.5T1040 1472zm-195-179l-179 179 179 179-90 90-179-178-179 178-90-90 178-179-178-179 90-90 179 179 179-179zm883 243q40 0 75 15t61 41 41 61 15 75-15 75-41 61-61 41-75 15-75-15-61-41-41-61-15-75 15-75 41-61 61-41 75-15zm-554-492q157-134 348-205t398-71v128q-189 0-363.5 67T1240 1156q-14-29-30.5-57.5T1174 1044zm137 410q55-71 123-127t146-95 164-59.5 176-20.5v128q-88 0-170 23t-153 64.5-129.5 100-100 129.5-64.5 153-23 170h-121q75-97 114-211.5t39-236.5q0-5-.5-9t-.5-9z'
    }
  ]
]

export default createIcon(jsx, 'WifiError3')
