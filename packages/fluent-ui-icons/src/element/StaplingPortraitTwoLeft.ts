export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1792 0v2048H128V0h1664zm-128 128H256v1792h1408V128zM512 1792H384v-384h128v384zm0-1152H384V256h128v384z'
      }
    }
  }
}
