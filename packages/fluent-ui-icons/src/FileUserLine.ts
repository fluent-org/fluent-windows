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
              'M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992zm9 8.508a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM7.527 17a4.5 4.5 0 0 1 8.946 0H7.527z',
            fillRule: 'nonzero'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'FileUserLine')
