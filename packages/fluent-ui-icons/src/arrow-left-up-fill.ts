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
            d: 'M12.36 10.947l5.658 5.656-1.415 1.415-5.656-5.657-4.95 4.95V5.997H17.31z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'arrow-left-up-fill')
