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
        'M2048 384v1280H0V384h640V256q0-27 10-50t27.5-40.5T718 138t50-10h512q27 0 50 10t40.5 27.5T1398 206t10 50v128h640zm-1280 0h512V256H768v128zM128 512v185l640 319V896h512v120l640-319V512H128zm768 512v128h256v-128H896zm1024 512V839l-640 321v120H768v-120L128 839v697h1792z'
    }
  ]
]

export default createIcon(jsx, 'Work')
