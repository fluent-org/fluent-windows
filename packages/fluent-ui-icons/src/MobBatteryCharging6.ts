import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 3072 2048'
  },
  [
    'path',
    {
      d:
        'M2944 896v256h-128v512H512v-128h2176V512H768V384h2048v512h128zM640 704q0 57-19 109t-53 93.5-81 70.5-103 41v646H256v-646q-56-12-103-41t-81-70.5T19 813 0 704V384h128V128h128v256h128V128h128v256h128v320zm-512 0q0 40 15 75t41 61 61 41 75 15 75-15 61-41 41-61 15-75V512H128v192zm384 439q90-39 156-111t100-164V640h1024v768H512v-265z'
    }
  ]
]

export default createIcon(jsx, 'MobBatteryCharging6')
