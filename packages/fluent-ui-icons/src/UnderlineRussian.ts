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
        'M1417 1743H632v-130h785v130zm-66-326h-128V987q-44 23-76 42.5t-61 32.5-58.5 20-67.5 7q-36 0-71.5-6t-67.5-17-60-27-47-35q-78-74-78-209V370h127v420q0 89 51.5 137.5T960 976q35 0 64-7t59-19.5 63.5-29.5 76.5-38V370h128v1047z'
    }
  ]
]

export default createIcon(jsx, 'UnderlineRussian')
