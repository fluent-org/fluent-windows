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
        'M704 1536q-40 0-75-15t-61-41-41-61-15-75V192q0-40 15-75t41-61 61-41 75-15h512q40 0 75 15t61 41 41 61 15 75v834q-34 11-66 25.5t-62 33.5V192q0-26-19-45t-45-19H704q-26 0-45 19t-19 45v1152q0 26 19 45t45 19h322q-2 2-2.5 20.5t-.5 40.5.5 42 .5 25H704zm1216 128q32 0 63-5.5t61-16.5q-8 86-46 160t-97.5 129-136.5 86-164 31q-93 0-174.5-35t-142.5-96-96-142.5-35-174.5q0-87 31-164t86-136.5 129-97.5 160-46q-11 30-16.5 61t-5.5 63q0 80 30 149.5t82.5 122 122 82.5 149.5 30zm-320 272q88 0 164-43t121-118q-92-6-173-44.5t-142.5-100-100-142.5-44.5-173q-75 45-118 121t-43 164q0 70 26.5 131t72 106.5 106.5 72 131 26.5zm-515-16q45 71 107 128H640v-128h256v-128H662q-84 0-158-32t-129-87-87-129-32-158v-362h128v362q0 57 22 108t59.5 88.5T554 1642t108 22h362v256h61z'
    }
  ]
]

export default createIcon(jsx, 'MicSleep')
