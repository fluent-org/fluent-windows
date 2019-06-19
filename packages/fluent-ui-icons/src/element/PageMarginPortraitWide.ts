export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1792 0v2048H128V0h1664zm-128 128h-384v256h384V128zm-512 1408V512H768v1024h384zm-384 128v256h384v-256H768zM640 512H256v1024h384V512zm512-128V128H768v256h384zm128 1152h384V512h-384v1024zM256 128v256h384V128H256zm0 1792h384v-256H256v256zm1408 0v-256h-384v256h384z'
      }
    }
  }
}
