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
        'M1152 640q128 0 245 48t208 139 139 208 48 245q0 133-50 249.5T1605 1733t-203.5 137-249.5 50v-128q106 0 199-40.5t162.5-110 110-162.5 40.5-199-40.5-199-110-162.5-162.5-110-199-40.5H475l402 403-90 90-557-557 557-557 90 90-402 403h677z'
    }
  ]
]

export default createIcon(jsx, 'Reply')
