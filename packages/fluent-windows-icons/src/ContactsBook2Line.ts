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
              'M20 22H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2v-2H6a1 1 0 0 0 0 2h13zM5 16.17c.313-.11.65-.17 1-.17h13V4H6a1 1 0 0 0-1 1v11.17zM12 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-3 4a3 3 0 0 1 6 0H9z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'ContactsBook2Line')
