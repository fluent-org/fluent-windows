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
              'M17 19h2v-5h-9V5H5v2h2v2H5v2h3v2H5v2h2v2H5v2h2v-2h2v2h2v-3h2v3h2v-2h2v2zm-5-7h8a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v8z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'Ruler2Line')
