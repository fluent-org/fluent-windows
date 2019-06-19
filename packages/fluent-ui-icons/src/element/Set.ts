export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M2048 640v1280H512v-256H256v-256H0V128h1536v256h256v256h256zM256 1280V384h1152V256H128v1024h128zm256 256V640h1152V512H384v1024h128zm1408-768H640v1024h1280V768z'
      }
    }
  }
}
