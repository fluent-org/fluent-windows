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
        'M0 1728V576h288v144H144v864h144v144H0zM2016 576h288v1152h-288v-144h144V720h-144V576zM432 1872V432h1440v1440H432zM576 576v1152h1152V576H576z'
    }
  ]
]

export default createIcon(jsx, 'Multitask16')
