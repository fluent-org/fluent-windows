export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M384 1792v-128h1664v128H384zM0 384V256h128v128H0zm0 1024v-128h128v128H0zm384 0v-128h1664v128H384zm0-1152h1664v128H384V256zm0 512V640h1664v128H384z'
      }
    }
  }
}
