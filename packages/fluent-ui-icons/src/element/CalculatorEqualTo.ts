export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M0 1408v-128h1920v128H0zm0-896h1920v128H0V512z'
      }
    }
  }
}
