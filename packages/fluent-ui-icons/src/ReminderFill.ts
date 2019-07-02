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
        'M960 64q88 0 170 23t153 64.5 129.5 100 100 129.5 64.5 153 23 170q0 134-50 244t-142 204-142 204-50 244v256q0 27-10 50t-27.5 40.5-40.5 27.5-50 10H832q-27 0-50-10t-40.5-27.5T714 1906t-10-50v-256q0-134-50-244t-142-204-142-204-50-244q0-88 23-170t64.5-153 100-129.5 129.5-100T790 87t170-23z'
    }
  ]
]

export default createIcon(jsx, 'ReminderFill')
