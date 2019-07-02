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
        'M1536 0q27 0 50 10t40.5 27.5T1654 78t10 50v1792q0 27-10 50t-27.5 40.5-40.5 27.5-50 10H512q-27 0-50-10t-40.5-27.5T394 1970t-10-50V128q0-27 10-50t27.5-40.5T462 10t50-10h1024zM512 1664h1024V128H512v1536zm1024 128H512v128h1024v-128z'
    }
  ]
]

export default createIcon(jsx, 'TaskbarPhone')
