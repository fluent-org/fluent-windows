export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M2048 1024H640V896h1408v128zM257 896L0 1152h512L257 896z'
      }
    }
  }
}
