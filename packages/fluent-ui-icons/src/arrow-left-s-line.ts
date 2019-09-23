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
            d: 'M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'arrow-left-s-line')
