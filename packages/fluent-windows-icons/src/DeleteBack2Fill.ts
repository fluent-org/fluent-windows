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
              'M6.535 3H21a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6.535a1 1 0 0 1-.832-.445l-5.333-8a1 1 0 0 1 0-1.11l5.333-8A1 1 0 0 1 6.535 3zM13 10.586l-2.828-2.829-1.415 1.415L11.586 12l-2.829 2.828 1.415 1.415L13 13.414l2.828 2.829 1.415-1.415L14.414 12l2.829-2.828-1.415-1.415L13 10.586z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'DeleteBack2Fill')
