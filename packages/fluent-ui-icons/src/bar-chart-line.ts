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
            d: 'M3 12h2v9H3v-9zm16-4h2v13h-2V8zm-8-6h2v19h-2V2z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'bar-chart-line')
