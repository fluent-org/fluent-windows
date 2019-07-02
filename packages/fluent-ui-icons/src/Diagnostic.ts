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
        'M1920 128v1792H128V128h1792zM256 256v1024h150l109-109q19-19 45-19t45 19l177 176 244-947q5-21 22.5-34.5T1088 352q23 0 40 13.5t22 35.5l102 417h156q22 0 39.5 13.5T1470 866l72 286h250V256H256zm1536 1536v-512h-300q-23 0-40-13.5t-22-35.5l-72-285h-156q-23 0-40-13.5t-22-35.5l-54-218-208 809q-5 21-22.5 34.5T816 1536q-26 0-45-19l-211-211-83 83q-19 19-45 19H256v384h1536z'
    }
  ]
]

export default createIcon(jsx, 'Diagnostic')
