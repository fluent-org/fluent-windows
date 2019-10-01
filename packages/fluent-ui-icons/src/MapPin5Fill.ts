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
            d: 'M17.657 15.657L12 21.314l-5.657-5.657a8 8 0 1 1 11.314 0zM5 22h14v2H5v-2z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'MapPin5Fill')
