export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M256 384h1408v1152H256V384zm1280 128h-512v896h512V512zM384 1408h512V512H384v896zm1408 0h128v384h-384v-128h256v-256zm128-1280v384h-128V256h-256V128h384zM128 512H0V128h384v128H128v256zm0 1152h256v128H0v-384h128v256z'
      }
    }
  }
}
