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
        'M960 0q133 0 255.5 34t229.5 96.5 194.5 150 150 194.5 96.5 229.5 34 255.5-34 255.5-96.5 229.5-150 194.5-194.5 150-229.5 96.5-255.5 34-255.5-34-229.5-96.5-194.5-150-150-194.5T34 1215.5 0 960t34-255.5T130.5 475t150-194.5 194.5-150T704.5 34 960 0zm0 1792q114 0 220.5-30t199-84 168.5-130 130-168.5 84-198.5 30-221q0-114-30-220.5t-84-199T1548 372t-168.5-130-199-84T960 128q-115 0-221 30t-198.5 84T372 372 242 540.5t-84 199T128 960t30 220.5 84 199T372 1548t168.5 130 198.5 84 221 30zM896 512h128v640H896V512zm0 768h128v128H896v-128z'
    }
  ]
]

export default createIcon(jsx, 'Error')
