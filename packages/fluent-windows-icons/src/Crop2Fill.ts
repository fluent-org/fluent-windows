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
              'M17.586 5l2.556-2.556 1.414 1.414L19 6.414V17h3v2h-3v3h-2V7H9V5h8.586zM15 17v2H6a1 1 0 0 1-1-1V7H2V5h3V2h2v15h8zM9 9h6v6H9V9z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'Crop2Fill')
