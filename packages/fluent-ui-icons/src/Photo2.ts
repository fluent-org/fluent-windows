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
        'M2048 256v1536H0V256h2048zM128 384v677l448-447 640 640 256-256 448 447V384H128zm0 1280h1317L576 794l-448 449v421zm1792 0v-37l-448-449-166 166 321 320h293zm-320-896q-26 0-45-19t-19-45 19-45 45-19 45 19 19 45-19 45-45 19z'
    }
  ]
]

export default createIcon(jsx, 'Photo2')
