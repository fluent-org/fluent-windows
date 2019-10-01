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
            d: 'M2 11h2v2H2v-2zm4 0h12v2H6v-2zm14 0h2v2h-2v-2z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'Separator')
