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
        'M1024 178q53 8 99 27t90 48q53 36 113 61.5t123.5 42.5 129 25 128.5 8v363q0 25-2 50t-5 50h-676V178zM171 390q63 0 128-8t128.5-25T551 314.5 664 253q44-29 90-48t99-27v675H177q-6-49-6-100V390zm853 634h637q-39 117-105 220t-150.5 192.5-182 166T1024 1742v-718zm-171 718q-102-63-199.5-139.5t-182-166T321 1244t-105-220h637v718z'
    }
  ]
]

export default createIcon(jsx, 'DefenderBadge12')
