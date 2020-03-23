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
            d: 'M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'ArrowDropRightLine')
