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
        'M1152 128v128h-128v1536h128v128H512v-128h128v-768H448q-93 0-174.5-35T131 893 35 750.5 0 576t35-174.5T131 259t142.5-96T448 128h704zM640 896V256H448q-66 0-124.5 25.5t-102 69T153 452t-25 124 25 124.5 68.5 102 102 68.5T448 896h192zm256 896V256H768v1536h128zM1920 486v1332l-666-666zm-128 308l-358 358 358 358V794z'
    }
  ]
]

export default createIcon(jsx, 'BidiRtl')
