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
              'M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm4 4h8v4.904c0 .892-.446 1.724-1.187 2.219L12 17.998l-2.813-1.875A2.667 2.667 0 0 1 8 13.904V9zm2 4.904c0 .223.111.431.297.555L12 15.594l1.703-1.135a.667.667 0 0 0 .297-.555V11h-4v2.904z',
            fillRule: 'nonzero'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'FolderShieldLine')
