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
              'M14 14.252V22H4a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm7 3.586l2.121-2.122 1.415 1.415L20.414 18l2.122 2.121-1.415 1.415L19 19.414l-2.121 2.122-1.415-1.415L17.586 18l-2.122-2.121 1.415-1.415L19 16.586z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'UserUnfollowFill')
