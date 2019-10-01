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
            d: 'M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'Italic')
