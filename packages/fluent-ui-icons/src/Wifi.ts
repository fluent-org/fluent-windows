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
        'M1024 2048q0-106 27.5-204t77.5-183.5 120-155.5 155.5-120 183.5-77.5 204-27.5v128q-88 0-170 23t-153 64.5-129.5 100-100 129.5-64.5 153-23 170h-128zm-384 0q0-159 41-306.5T797 1466t180-233 233-180 275.5-116 306.5-41v128q-141 0-271.5 36.5T1276 1164t-207.5 160.5T908 1532t-103.5 244.5T768 2048H640zm-384 0q0-212 55-408t155-367 240-311 311-240 367-155 408-55v128q-194 0-373.5 50.5t-336 142T797 1053t-220.5 285.5-142 336T384 2048H256zm1344-384q40 0 75 15t61 41 41 61 15 75-15 75-41 61-61 41-75 15-75-15-61-41-41-61-15-75 15-75 41-61 61-41 75-15z'
    }
  ]
]

export default createIcon(jsx, 'Wifi')
