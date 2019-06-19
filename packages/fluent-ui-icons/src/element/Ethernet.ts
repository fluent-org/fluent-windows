export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M2048 1408h-896v256h384v128H640v-128h384v-256H384v384H256v-768H0V256h2048v1152zM128 384v128h384V384H128zm0 512h384V640H384v128H256V640H128v256zm256 384h1536V384H640v640H384v256z'
      }
    }
  }
}
