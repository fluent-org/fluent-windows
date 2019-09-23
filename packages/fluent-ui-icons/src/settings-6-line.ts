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
              'M17.5 2.474L23 12l-5.5 9.526h-11L1 12l5.5-9.526h11zm-1.155 2h-8.69L3.309 12l4.346 7.526h8.69L20.691 12l-4.346-7.526zM8.634 8.17l1.732-1 5 8.66-1.732 1-5-8.66z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'settings-6-line')
