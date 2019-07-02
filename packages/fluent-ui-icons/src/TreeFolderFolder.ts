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
        'M1536 0q26 0 49.5 10t41 27.5 27.5 41 10 49.5v930q0 30 9.5 52.5t23.5 43 31 41 31 46 23.5 58.5 9.5 77v288q0 26-10 49.5t-27.5 41-41 27.5-49.5 10H256V0h1280zM384 1664h1024v-288q0-44 9.5-77t23.5-58.5 31-46 31-41 23.5-43 9.5-52.5V128H384v1536zm1280-288q0-24-4.5-42t-13-33-20.5-29.5-26-31.5q-14 17-26 31.5t-20.5 29.5-13 33-4.5 42v288h128v-288z'
    }
  ]
]

export default createIcon(jsx, 'TreeFolderFolder')
