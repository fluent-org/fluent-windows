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
              'M6 10h3l-4 5-4-5h3V8a5 5 0 0 1 5-5h4v2H9a3 3 0 0 0-3 3v2zm5-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'AnticlockwiseFill')
