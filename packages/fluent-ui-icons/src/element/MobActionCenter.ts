export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1920 384v1408h-640l-256 256-256-256H128V384h1792zm-128 128H256v1152h565q53 50 102.5 101t100.5 102q51-51 100.5-102t102.5-101h565V512zm-256 384H512V768h1024v128zm0 256H512v-128h1024v128zm-384 256H512v-128h640v128z'
      }
    }
  }
}
