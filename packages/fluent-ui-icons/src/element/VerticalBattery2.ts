export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1664 128v1792H512V128h384V0h384v128h384zm-128 128H640v1536h896V256zm-128 1408H768v-256h640v256z'
      }
    }
  }
}
