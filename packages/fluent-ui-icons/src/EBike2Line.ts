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
              'M17 12a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3H4v3.354A4.002 4.002 0 0 1 10.874 17h4.252a4.002 4.002 0 0 1 4.568-2.94L17.853 9H17v3zm-2 0V3h-3V1h4a1 1 0 0 1 1 1v1h5v6h-2.019l2.746 7.544a4 4 0 0 1-7.6 2.456h-4.253a4.002 4.002 0 0 1-7.8-.226A2 2 0 0 1 2 17V7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm-6-2V8H4v2h5zm11.864 7.271a2 2 0 1 0 .016.044l-.016-.044zM17 7h3V5h-3v2zM7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'EBike2Line')