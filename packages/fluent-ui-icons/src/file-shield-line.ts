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
              'M14 8V4H5v16h14V9h-3v4.62c0 .844-.446 1.633-1.187 2.101L12 17.498 9.187 15.72C8.446 15.253 8 14.464 8 13.62V8h6zm7 0v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8zm-11 5.62c0 .15.087.304.255.41L12 15.132l1.745-1.102c.168-.106.255-.26.255-.41V10h-4v3.62z',
            fillRule: 'nonzero'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'file-shield-line')
