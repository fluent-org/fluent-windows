export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1536 1536h128v384h-384v-128h256v-256zM1664 0v384h-128V128h-256V0h384zM384 384H256V0h384v128H384v256zm0 1408h256v128H256v-384h128v256zM512 256h896v1408H512V256zm128 1280h640V384H640v1152z'
      }
    }
  }
}
