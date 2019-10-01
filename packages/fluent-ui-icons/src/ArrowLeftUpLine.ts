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
            d: 'M9.414 8l8.607 8.607-1.414 1.414L8 9.414V17H6V6h11v2z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'ArrowLeftUpLine')
