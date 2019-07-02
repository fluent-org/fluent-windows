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
        'M1914 684q26 0 45 18.5t19 45.5q0 15-8 29-69 140-180 256t-247 199.5-289.5 129.5-309.5 46q-162 0-296.5-45T405 1235t-190.5-201.5T75 768q-5-13-5-24 0-26 19.5-45t45.5-19q21 0 35.5 11t23.5 29q14 27 24.5 55t24.5 55q48 95 114.5 180T512 1156q95 66 207 95t226 29q37 0 73-2.5t72-8.5q98-16 191-50t177.5-84.5 159-115.5T1754 876q30-38 54-77t49-81q10-16 23.5-25t33.5-9z'
    }
  ]
]

export default createIcon(jsx, 'HWPJoin')
