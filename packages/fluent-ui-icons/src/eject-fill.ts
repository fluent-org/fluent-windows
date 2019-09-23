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
              'M12.416 3.624l7.066 10.599a.5.5 0 0 1-.416.777H4.934a.5.5 0 0 1-.416-.777l7.066-10.599a.5.5 0 0 1 .832 0zM5 17h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'eject-fill')
