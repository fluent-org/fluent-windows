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
              'M16.625 3.133l-1.5 1.5A7.98 7.98 0 0 0 12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8a7.98 7.98 0 0 0-.633-3.125l1.5-1.5A9.951 9.951 0 0 1 22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2c1.668 0 3.241.41 4.625 1.133zm1.739 1.089l1.414 1.414L12 13.414 10.586 12l7.778-7.778z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'compass-2-line')