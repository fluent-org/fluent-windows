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
        'M1314 769v517h-116V305h116v392h168v72h-168zm-251-334q-12 446-471 706l-62-66q164-67 295-220 32-37 58-74t45-75.5 31.5-80.5 17.5-91H575v-99h488zm513 1242H466v-195h1110v195z'
    }
  ]
]

export default createIcon(jsx, 'FontColorKorean')
