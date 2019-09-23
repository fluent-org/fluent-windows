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
              'M14.515 5l2.606-2.607a1 1 0 0 1 1.415 0l4.242 4.243a1 1 0 0 1 0 1.414L19 11.828V21a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-9.172L1.222 8.05a1 1 0 0 1 0-1.414l4.242-4.243a1 1 0 0 1 1.415 0L9.485 5h5.03z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 't-shirt-fill')
