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
        'M1920 768v1280H896v-128H128V256h512q0-52 20.5-99t55-81.5 81-55T896 0q52 0 99 20.5t81.5 55 55 81.5 20.5 99h512v512h256zM512 384v128h768V384h-256q0-16 .5-33.5t.5-35.5q0-34-3.5-67.5t-17-60-39-43T896 128t-69.5 16.5-39 43-17 60T767 315q0 18 .5 35.5t.5 33.5H512zm384 1408V768h640V384h-128v256H384V384H256v1408h640zm896-896h-768v1024h768V896z'
    }
  ]
]

export default createIcon(jsx, 'Paste')
