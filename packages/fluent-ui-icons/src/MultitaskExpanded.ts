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
        'M576 1823.625V480.375h1152v1343.25H576zM671.625 576v1152h960.75V576h-960.75zM0 1632.375v-960.75h480.375v960.75H0zm95.625-864v767.25h288v-767.25h-288zm1728-96.75H2304v960.75h-480.375v-960.75zm384.75 864v-767.25h-288v767.25h288z'
    }
  ]
]

export default createIcon(jsx, 'MultitaskExpanded')
