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
              'M20.644 8.586c-.17-.711-.441-1.448-.774-2.021-.771-1.329-1.464-2.237-3.177-3.32C14.98 2.162 13.076 2 12.17 2c-2.415 0-4.211.86-5.525 1.887C3.344 6.47 3 11 3 11s1.221-2.045 3.54-3.526C7.943 6.579 9.941 6 11.568 6 15.885 6 16 10 16 10H9c0-2 1-3 1-3s-5 2-5 7.044c0 .487-.003 1.372.248 2.283.232.843.7 1.705 1.132 2.353 1.221 1.832 3.045 2.614 3.916 2.904.996.332 2.029.416 3.01.416 2.72 0 4.877-.886 5.694-1.275v-4.172c-.758.454-2.679 1.447-5 1.447-5 0-5-4-5-4h12v-2.49s-.039-1.593-.356-2.924z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'edge-fill')
