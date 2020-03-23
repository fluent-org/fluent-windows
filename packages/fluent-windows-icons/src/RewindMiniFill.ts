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
              'M11 17.035a.5.5 0 0 1-.788.409l-7.133-5.036a.5.5 0 0 1 0-.816l7.133-5.036a.5.5 0 0 1 .788.409v10.07zm1.079-4.627a.5.5 0 0 1 0-.816l7.133-5.036a.5.5 0 0 1 .788.409v10.07a.5.5 0 0 1-.788.409l-7.133-5.036z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'RewindMiniFill')
