export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M0 128h2048v1664H0V128zm1920 1536V256H128v1408h1792zM1536 512v128H512V512h1024zm-896 512v384H256v-384h384zm-128 256v-128H384v128h128zm320 128v-384h384v384H832zm128-256v128h128v-128H960zm448 256v-384h384v384h-384zm128-256v128h128v-128h-128z'
      }
    }
  }
}
