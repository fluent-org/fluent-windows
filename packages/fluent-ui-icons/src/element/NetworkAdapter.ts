export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1664 1408h-640v128h128v128h256v128h384v128h-384v128H512v-128H128v-128h384v-128h256v-128h128v-128H128V384h256V128h1536v1024h-256v256zm-384 384h-256v-128H896v128H640v128h640v-128zM512 256v128h1152v640h128V256H512zM256 1280h1280V512H256v768z'
      }
    }
  }
}
