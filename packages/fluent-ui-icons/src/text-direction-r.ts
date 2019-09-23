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
              'M11 5v10H9v-4a4 4 0 1 1 0-8h8v2h-2v10h-2V5h-2zM9 5a2 2 0 1 0 0 4V5zM7 17h12v2H7v2.5L3 18l4-3.5V17z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'text-direction-r')
