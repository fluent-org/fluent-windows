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
              'M9 13v3h6v-3h7v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7h7zm2-2h2v3h-2v-3zM7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v5h-7V9H9v2H2V6a1 1 0 0 1 1-1h4zm2-2v2h6V3H9z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'briefcase-4-fill')
