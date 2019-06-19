export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M2048 768h-128v1152H128V768H0V128h2048v640zm-256 0H256v1024h1536V768zm128-512H128v384h1792V256zm-896 1152H384v-128h640v128zm-640 256v-128h512v128H384z'
      }
    }
  }
}
