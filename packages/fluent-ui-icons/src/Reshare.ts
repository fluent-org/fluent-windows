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
        'M1312 1536l128 128H256V603L93 765 3 675l317-317 317 317-90 90-163-162v933h928zm733-163l-317 317-317-317 90-90 163 162V512H736L608 384h1184v1061l163-162z'
    }
  ]
]

export default createIcon(jsx, 'Reshare')
