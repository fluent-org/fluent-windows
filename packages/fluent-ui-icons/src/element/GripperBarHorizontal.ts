export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M0 768h2048v128H0V768zm0 512v-128h2048v128H0z'
      }
    }
  }
}
