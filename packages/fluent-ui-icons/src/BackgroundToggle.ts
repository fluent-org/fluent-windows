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
        'M1024 1024h512v1024H512v-640H0V384h1024v640zm-128 256V512H128v768h768zm1069-595l-237 237-237-237 90-90 83 82V512q0-27-10-50t-27.5-40.5T1586 394t-50-10h-165l82 83-90 90-237-237 237-237 90 90-82 83h165q53 0 99.5 20t81.5 55 55 81.5 20 99.5v165l83-82z'
    }
  ]
]

export default createIcon(jsx, 'BackgroundToggle')
