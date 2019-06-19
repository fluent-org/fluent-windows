export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M384 256h1152v1408H384V256zm1024 1280v-512H512v512h896zM512 384v512h896V384H512zm1152 1152h128v384h-384v-128h256v-256zM1792 0v384h-128V128h-256V0h384zM256 384H128V0h384v128H256v256zm0 1408h256v128H128v-384h128v256z'
      }
    }
  }
}
