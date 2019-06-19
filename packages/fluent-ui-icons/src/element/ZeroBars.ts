export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1536 256h384v1536h-384V256zm256 1408V384h-128v1280h128zm-768 128V640h384v1152h-384zm128-1024v896h128V768h-128zM512 1792v-768h384v768H512zm128-640v512h128v-512H640zM0 1792v-384h384v384H0zm128-256v128h128v-128H128z'
      }
    }
  }
}
