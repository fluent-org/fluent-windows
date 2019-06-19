export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1792 0v2048H128V0h1664zm-128 128h-256v256h256V128zm-384 1408V512H640v1024h640zm-640 128v256h640v-256H640zM512 512H256v1024h256V512zm768-128V128H640v256h640zm128 1152h256V512h-256v1024zM256 128v256h256V128H256zm0 1792h256v-256H256v256zm1408 0v-256h-256v256h256z'
      }
    }
  }
}
