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
        'M1856 1088v128h-64v320H384v-64h1344V832H489q-8-19-19-32.5T446 770l-1-2h1347v320h64zM447 928q0 28-9.5 54t-26.5 47-40 36-51 20v451h-64v-451q-28-5-51.5-20t-40.5-36-26.5-47-9.5-54q0-32 12-61t35-52l113-113 113 113q23 23 34.5 52t11.5 61zm-255 0q0 30 17.5 55.5T256 1018V896h64v122q29-9 46.5-34.5T384 928q0-40-28-68l-68-68-68 68q-28 28-28 68zm192 202q58-28 93-82.5T512 928v-32h896v512H384v-278z'
    }
  ]
]

export default createIcon(jsx, 'BatterySaver8')
