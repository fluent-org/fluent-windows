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
        'M1280 1032v120H512V512h768v120l256-128v656zm128-321l-128 65v112l128 65V711zm-256 313V640H640v384h512zM0 128h2048v1408H731l-475 475v-475H0V128zm1920 1280V256H128v1152h256v293l293-293h1243z'
    }
  ]
]

export default createIcon(jsx, 'VideoChat')
