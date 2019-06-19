export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1664 768v512h-384v384H768v-384H384V768h384V384h512v384h384zm-128 384V896h-384V512H896v384H512v256h384v384h256v-384h384z'
      }
    }
  }
}
