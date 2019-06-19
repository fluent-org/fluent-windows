export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1792 1792h-256v256H128V256h256V0h1408v1792zM1408 384H256v1536h1152V384zm256-256H512v128h1024v1408h128V128zM896 896H384V512h512v384zM768 640H512v128h256V640zm512 0h-256V512h256v128zm0 256h-256V768h256v128zm0 256H384v-128h896v128zm0 256H384v-128h896v128zm0 256H384v-128h896v128z'
      }
    }
  }
}
