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
            d: 'M13.05 12.36l-5.656 5.658-1.414-1.415 5.657-5.656-4.95-4.95H18V17.31z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'arrow-right-up-fill')
