export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1792 1536h256v128h-256v256h-128v-256h-256v-128h256v-256h128v256zM0 384h2048v1024h-128V512h-128v640h-128V512H384v1024h896v128H0V384zm256 1152V512H128v1024h128z'
      }
    }
  }
}
