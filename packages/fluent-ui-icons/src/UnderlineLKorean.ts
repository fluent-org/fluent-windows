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
        'M1076 370q0 154-42.5 294.5T903 929q-41 61-95 113.5t-116 99-131.5 86T417 1302l-86-82q258-93 418-275 44-51 78-100t58.5-101.5 39.5-112T947 500H424V370h652zm492-196l-99 98v490h262v131h-262v589h-130V174h229zm163 1569H364v-131h1367v131z'
    }
  ]
]

export default createIcon(jsx, 'UnderlineLKorean')
