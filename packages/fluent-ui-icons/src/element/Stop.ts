export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M1920 128v1792H128V128h1792zm-128 128H256v1536h1536V256z'
      }
    }
  }
}
