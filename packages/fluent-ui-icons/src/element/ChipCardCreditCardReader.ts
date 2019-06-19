export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M2048 640h-384v1280q0 27-10 50t-27.5 40.5-40.5 27.5-50 10H512q-27 0-50-10t-40.5-27.5T394 1970t-10-50V640H0V0h2048v640zm-512-256h-512v384H640V384H512v1536h1024V384zM768 640h128V384H768v256zm1152-512H128v384h256V384H256V256h1536v128h-128v128h256V128zm-768 1664v-384h128v384h-128zm128-512h-128V640h128v640z'
      }
    }
  }
}
