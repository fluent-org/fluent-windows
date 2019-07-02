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
        'M1408 640v384h-384V896h190q-45-60-112-94t-142-34q-59 0-111.5 20T754 843.5 684 928t-38 107l-127-22q14-81 54-149t98.5-118T804 668t156-28q91 0 174 35.5T1280 777V640h128zm-448 768q58 0 111-20t95-55.5 70-84.5 38-107l127 22q-14 81-54 149t-98.5 118-132.5 78-156 28q-91 0-174-35.5T640 1399v137H512v-384h384v128H706q45 60 112 94t142 34z'
    }
  ]
]

export default createIcon(jsx, 'StatusCircleSync')
