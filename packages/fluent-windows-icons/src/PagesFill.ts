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
              'M20 22H4a1 1 0 0 1-1-1V8h18v13a1 1 0 0 1-1 1zm1-16H3V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v3zM7 11v4h4v-4H7zm0 6v2h10v-2H7zm6-5v2h4v-2h-4z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'PagesFill')