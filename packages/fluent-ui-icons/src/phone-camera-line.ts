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
              'M14.803 4a5.96 5.96 0 0 0-.72 2H3v12h18v-5.083a5.96 5.96 0 0 0 2-.72V19c0 .553-.44 1.001-1.002 1.001H2.002A1 1 0 0 1 1 19V5c0-.552.44-1 1.002-1h12.8zM20 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-2 2h2v3h-2v-3z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'phone-camera-line')
