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
            d: 'M2 19h20v2H2v-2zM2 5l5 3 5-6 5 6 5-3v12H2V5z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'vip-crown-fill')
