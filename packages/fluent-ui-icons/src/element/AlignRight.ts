export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M0 128h2048v128H0V128zm0 1664v-128h2048v128H0zm0-768V896h2048v128H0zm512-384V512h1536v128H512zm0 768v-128h1536v128H512z'
      }
    }
  }
}
