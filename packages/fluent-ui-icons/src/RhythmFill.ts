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
            d: 'M2 9h2v12H2V9zm6-6h2v18H8V3zm6 9h2v9h-2v-9zm6-6h2v15h-2V6z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'RhythmFill')
