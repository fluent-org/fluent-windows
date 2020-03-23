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
              'M4 3h16a1 1 0 0 1 1 1v7H3V4a1 1 0 0 1 1-1zM3 13h18v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7zm4 3v2h3v-2H7zM7 6v2h3V6H7z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'ServerFill')
