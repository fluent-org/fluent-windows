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
              'M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4V3zM2.859 2.877l12.57-1.795a.5.5 0 0 1 .571.495v20.846a.5.5 0 0 1-.57.495L2.858 21.123a1 1 0 0 1-.859-.99V3.867a1 1 0 0 1 .859-.99zM11 8v4.989L9 11l-1.99 2L7 8H5v8h2l2-2 2 2h2V8h-2z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'file-word-2-fill')
