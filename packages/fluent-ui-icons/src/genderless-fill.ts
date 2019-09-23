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
            d: 'M11 7.066V1h2v6.066A7.501 7.501 0 0 1 12 22a7.5 7.5 0 0 1-1-14.934z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'genderless-fill')
