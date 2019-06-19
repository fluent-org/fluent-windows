export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M0 256h1920v1536H0V256zm1792 1408V384H128v1280h1664zM1152 512v896H256V512h896zm-128 768V640H384v640h640zM640 768v128H512V768h128zm0 256v128H512v-128h128zm256-256v128H768V768h128zm0 256v128H768v-128h128z'
      }
    }
  }
}
