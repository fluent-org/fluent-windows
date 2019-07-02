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
        'M576 1823.625V480.375h1152v1343.25H576zM671.625 576v1152h960.75V576h-960.75zm1152 95.625h288v960.75h-288v-96.75H2016v-767.25h-192.375v-96.75zm-1631.25 960.75v-960.75h288v96.75H288v767.25h192.375v96.75h-288z'
    }
  ]
]

export default createIcon(jsx, 'Multitask')
