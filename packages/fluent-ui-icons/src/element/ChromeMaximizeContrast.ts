export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M0 0h2048v2048H0V0zm1638 1638V410H410v1228h1228z'
      }
    }
  }
}
