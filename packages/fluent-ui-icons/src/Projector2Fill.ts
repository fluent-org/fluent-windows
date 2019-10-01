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
              'M22 19v2h-2v-2H4v2H2v-2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h9.81a6.481 6.481 0 0 1 4.69-2c1.843 0 3.507.767 4.69 2H22a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1zm-5.5-5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0-2a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM4 13v2h2v-2H4zm4 0v2h2v-2H8z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'Projector2Fill')
