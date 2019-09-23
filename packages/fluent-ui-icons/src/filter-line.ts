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
              'M9 13.5L4 6H3V4h18v2h-1l-5 7.5V22H9v-8.5zM6.404 6L11 12.894V20h2v-7.106L17.596 6H6.404z',
            fillRule: 'nonzero'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'filter-line')
