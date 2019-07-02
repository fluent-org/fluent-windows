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
        'M1402 390q126 128 194 291t68 343-68 343-194 291l-91-91q109-109 167-249t58-294-58-294-167-249zm-272 272q73 73 111.5 166t38.5 196-38.5 196-111.5 166l-90-90q54-54 83-124.5t29-147.5-29-147.5-83-124.5zM448 512q93 0 174.5 35T765 643t96 142.5T896 960v281q0 38-17 69t-44 53-61.5 33.5T704 1408h-64v-384h64l64 10v-74q0-66-25.5-124t-69-101.5-101.5-69T448 640t-124.5 25.5-102 69T153 836t-25 124v74q16-5 31.5-7.5t32.5-2.5h64v384h-64q-35 0-69.5-11.5T61 1363t-44-53-17-69V960q0-93 35-174.5T131 643t142.5-96T448 512z'
    }
  ]
]

export default createIcon(jsx, 'Headphone2')
