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
        'M1024 8q81 8 153 31.5t140 68.5q69 46 141.5 75t148 45 154 22 159.5 6v512q0 32-2.5 64t-6.5 64h-887V8zM0 256q81 0 159.5-6T314 228t148.5-45T604 107q67-45 139-68T896 8v888H9q-4-32-6.5-64T0 768V256zm896 1752q-141-82-278-184t-253-225-203-267-129-308h863v984zm128-984h863q-42 164-129 308t-203 267-253 225-278 184v-984z'
    }
  ]
]

export default createIcon(jsx, 'DefenderApp')
