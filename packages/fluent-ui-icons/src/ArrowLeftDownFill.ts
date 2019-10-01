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
            d: 'M12.36 13.05L17.31 18H5.998V6.688l4.95 4.95 5.656-5.657 1.415 1.414z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'ArrowLeftDownFill')
