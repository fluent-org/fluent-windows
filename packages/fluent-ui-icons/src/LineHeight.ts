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
              'M11 4h10v2H11V4zM6 7v4H4V7H1l4-4 4 4H6zm0 10h3l-4 4-4-4h3v-4h2v4zm5 1h10v2H11v-2zm-2-7h12v2H9v-2z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'LineHeight')
