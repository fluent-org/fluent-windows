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
          type: 'circle',
          props: {
            cx: '12',
            cy: '12',
            r: '10',
            fill: '#000'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'CheckboxBlankCircleFill')
