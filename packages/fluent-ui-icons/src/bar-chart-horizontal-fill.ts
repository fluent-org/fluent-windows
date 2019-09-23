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
            d: 'M12 3v4H3V3h9zm4 14v4H3v-4h13zm6-7v4H3v-4h19z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'bar-chart-horizontal-fill')
