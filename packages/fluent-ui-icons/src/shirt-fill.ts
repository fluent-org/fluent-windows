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
              'M7 4v7l5-2.5 5 2.5V4h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3zm5 4L7.5 3h9L12 8zm1 3.236l-1-.5-1 .5V20h2v-8.764zM15 14v2h4v-2h-4z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'shirt-fill')
