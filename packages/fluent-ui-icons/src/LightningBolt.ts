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
        'M1223 768h660L603 2048H313l384-768H248L888 0h719zM549 1920L1573 896h-557l384-768H967L455 1152h449l-384 768h29z'
    }
  ]
]

export default createIcon(jsx, 'LightningBolt')
