export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M1792 0v2048H128V0h1664zm-128 128H256v1792h1408V128zM493 621l-90-90 256-256 90 90z'
      }
    }
  }
}
