export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1152 256h768v1024h-896v-256H384v1024H256V0h896v256zM384 896h640V128H384v768zm1408 256V384h-640v768h640z'
      }
    }
  }
}
