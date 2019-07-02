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
        'M1280 1408v43l102 140q9 13 15 35t6 38q0 26-10 49.5t-27.5 41-41 27.5-49.5 10H133q-26 0-49.5-10t-41-27.5-27.5-41T5 1664q0-16 6-38t15-35l102-140V768h384V256h1536v1152h-768zm-1024 0h896V896H256v512zm1019 255q-5-11-17-28t-26-35-27.5-35.5-21.5-28.5H225q-8 11-21.5 28.5T176 1600t-26 35-17 28v1h1142v-1zm5-895v512h640V384H640v384h640z'
    }
  ]
]

export default createIcon(jsx, 'Project')
