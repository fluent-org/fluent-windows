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
            d: 'M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'ArrowDropDownLine')
