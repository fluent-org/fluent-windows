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
        'M2048 384v1280H0V384h2048zm-128 128H128v1024h1792V512zM704 1408q-80 0-149.5-30t-122-82.5-82.5-122-30-149.5q0-79 30-149t82.5-122.5 122-82.5T704 640q77 0 147 29t124 83l-90 91q-36-36-83-55.5T704 768q-53 0-99.5 20T523 843t-55 81.5-20 99.5 20 99.5 55 81.5 81.5 55 99.5 20q51 0 98-19.5t83-55.5l90 91q-54 54-124 83t-147 29zm768 0q-80 0-149.5-30t-122-82.5-82.5-122-30-149.5q0-79 30-149t82.5-122.5 122-82.5 149.5-30q77 0 147 29t124 83l-90 91q-36-36-83-55.5t-98-19.5q-53 0-99.5 20t-81.5 55-55 81.5-20 99.5 20 99.5 55 81.5 81.5 55 99.5 20q51 0 98-19.5t83-55.5l90 91q-54 54-124 83t-147 29z'
    }
  ]
]

export default createIcon(jsx, 'CC')
