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
              'M11 14v5L1 11l10-8v5c5.523 0 10 4.477 10 10 0 .273-.01.543-.032.81A8.999 8.999 0 0 0 13 14h-2z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'ReplyFill')
