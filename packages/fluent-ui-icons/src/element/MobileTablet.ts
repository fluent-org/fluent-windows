export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M512 1536H256v-128h256v128zm768-256h-256v-128h256v128zm640-1024q27 0 50 10t40.5 27.5T2038 334t10 50v1024q0 27-10 50t-27.5 40.5-40.5 27.5-50 10H768v256H0V640h256V384q0-27 10-50t27.5-40.5T334 266t50-10h1536zM640 768H128v896h512V768zm1280-384H384v256h384v768h1152V384z'
      }
    }
  }
}
