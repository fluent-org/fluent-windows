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
        'M915 1299l274-275-274-275 90-90 275 274 275-274 90 90-274 275 274 275-90 90-275-274-275 274zM2048 256v1536H768L0 1024l768-768h1280zm-128 128H821l-640 640 640 640h1099V384z'
    }
  ]
]

export default createIcon(jsx, 'BackSpaceQWERTY')
