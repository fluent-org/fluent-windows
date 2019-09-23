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
              'M2 4h2v16H2V4zm4 0h2v16H6V4zm3 0h3v16H9V4zm4 0h2v16h-2V4zm3 0h2v16h-2V4zm3 0h3v16h-3V4z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'barcode-fill')
