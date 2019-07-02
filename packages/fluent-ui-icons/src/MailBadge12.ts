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
        'M171 341h1706v1366H171V341zm1536 171H341v161l683 341 683-341V512zM341 1536h1366V863l-683 342-683-342v673z'
    }
  ]
]

export default createIcon(jsx, 'MailBadge12')
