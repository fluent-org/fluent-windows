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
            d: 'M11.637 13.05L5.98 7.395 7.394 5.98l5.657 5.657L18 6.687V18H6.687z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'arrow-right-down-fill')
