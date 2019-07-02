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
        'M768 1109q58-28 105.5-70.5t81-95.5 51.5-113.5 18-125.5v-64h384v1024H768v-555zm896-981v1792H768v-128h768V256H896V0h384v128h384zM896 704q0 57-19 109t-53 93.5-81 70.5-103 40v903H512v-903q-56-11-103-40t-81-70.5-53-93.5-19-109V384h128V128h128v256h128V128h128v256h128v320zM768 512H384v192q0 40 15 75t41 61 61 41 75 15 75-15 61-41 41-61 15-75V512z'
    }
  ]
]

export default createIcon(jsx, 'VerticalBatteryCharging8')
