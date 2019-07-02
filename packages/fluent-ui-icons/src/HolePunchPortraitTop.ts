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
        'M1792 0v2048H128V0h1664zm-128 128H256v1792h1408V128zM512 512q-27 0-50-10t-40.5-27.5T394 434t-10-50 10-50 27.5-40.5T462 266t50-10 50 10 40.5 27.5T630 334t10 50-10 50-27.5 40.5T562 502t-50 10zm896 0q-27 0-50-10t-40.5-27.5T1290 434t-10-50 10-50 27.5-40.5T1358 266t50-10 50 10 40.5 27.5T1526 334t10 50-10 50-27.5 40.5T1458 502t-50 10z'
    }
  ]
]

export default createIcon(jsx, 'HolePunchPortraitTop')
