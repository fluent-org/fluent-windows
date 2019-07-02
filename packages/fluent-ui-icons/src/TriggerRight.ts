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
        'M1664 896q0 111 13 210.5t38 195 61 189 83 191.5l7 14q9 18 18.5 38.5t17.5 41.5 13 41.5 5 38.5q0 45-25.5 80.5t-64 60-83 38-83.5 13.5h-448q-178 0-337.5-34.5t-294.5-101-243-165T157 1521 40.5 1236.5 0 896q0-259 33-516 6-50 12.5-102.5T66 177q15-51 49-85t78-54.5 93.5-29T384 0h1152q44 0 90 14.5t83 41.5 60.5 66.5T1793 211q0 60-15.5 117T1743 442q-20 58-34.5 113T1684 665.5 1669 778t-5 118zm0 1024q10 0 31.5-5.5t43-14.5 37.5-20.5 16-23.5q0-7-6.5-24t-14.5-35.5-16-35-12-24.5q-50-105-88.5-205t-65-202-40-209-13.5-225q0-67 5.5-129t16.5-122 27-120 37-123l5-16q14-42 26-85t12-88q0-5-.5-8.5t-.5-8.5q0-14-16-26.5t-37-21.5-42.5-14.5-32.5-5.5H384q-21 0-51 3t-59 12-52.5 24.5T190 207t-11.5 52.5T171 314q-22 145-32.5 290.5T128 896q0 165 36 305t104 254 164.5 201T650 1801.5t263.5 88.5 302.5 30h448zM896 864q0 55-25.5 101t-70.5 76l96 239H768l-78-196q-20 4-40 5t-40 1q-25 0-49.5-1t-48.5-1v192H384V640h256q49 0 95 15t82 44 57.5 70.5T896 864zm-256 96q21 0 44-5.5t41.5-17.5 30.5-30 12-43-12-43-30.5-30-41.5-17.5-44-5.5H512v192h128zm256-320h512v128h-192v512h-128V768H896V640z'
    }
  ]
]

export default createIcon(jsx, 'TriggerRight')
