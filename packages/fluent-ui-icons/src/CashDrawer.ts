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
        'M1928 1408h120v640H0v-640h120l128-256H128V640L448 0h1152l320 640v512h-120zM768 768H583l-191 384h376V768zm128 0v384h256V768H896zm384 0v384h376l-191-384h-185zm512 256V768h-185l128 256h57zM527 128L271 640h1506l-256-512H527zm-271 896h57l128-256H256v256zm71 256l-63 128h1520l-63-128H327zm1593 640v-384H128v384h1792zm-640-256v128H768v-128h512z'
    }
  ]
]

export default createIcon(jsx, 'CashDrawer')
