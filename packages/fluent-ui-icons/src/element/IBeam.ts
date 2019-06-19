export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M1408 256h-384v1536h384v128H512v-128h384V256H512V128h896v128z'
      }
    }
  }
}
