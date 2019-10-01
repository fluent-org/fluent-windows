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
            d: 'M3 12h4v9H3v-9zm14-4h4v13h-4V8zm-7-6h4v19h-4V2z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'BarChartFill')
