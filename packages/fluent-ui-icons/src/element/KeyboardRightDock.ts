export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M0 256h1920v1536H0V256zm1792 1408V384H128v1280h1664zM1664 512v896H768V512h896zm-128 768V640H896v640h640zm-128-512v128h-128V768h128zm0 256v128h-128v-128h128zm-256-256v128h-128V768h128zm0 256v128h-128v-128h128z'
      }
    }
  }
}
