import createIcon, { JSX } from './utils/createIcon'

export const jsx: JSX = {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24'
  },
  children: [
    {
      type: 'g',
      props: null,
      children: [
        {
          type: 'path',
          props: {
            fill: 'none',
            d: 'M0 0h24v24H0z'
          },
          children: []
        },
        {
          type: 'path',
          props: {
            d:
              'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.891-13.477a6.04 6.04 0 0 0-1.414-1.414l-8.368 8.368a6.04 6.04 0 0 0 1.414 1.414l8.368-8.368z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'forbid-2-fill')
