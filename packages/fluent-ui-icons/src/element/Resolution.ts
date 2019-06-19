export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M896 128h1024v1792H128V896h384V640H128V128h512v384h256V128zm128 128v256h256V256h-256zM256 512h256V256H256v256zm384 128v256h256V640H640zm-384 384v256h256v-256H256zm1536 768V256h-384v384h-384v384H640v384H256v384h1536z'
      }
    }
  }
}
