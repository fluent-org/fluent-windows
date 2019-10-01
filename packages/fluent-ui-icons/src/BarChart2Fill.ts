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
            d: 'M2 13h6v8H2v-8zM9 3h6v18H9V3zm7 5h6v13h-6V8z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'BarChart2Fill')
