export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M0 1920V512h2048v1408H0zM1536 768v128h128V768h-128zm0 256v128h128v-128h-128zm0 256v128h128v-128h-128zm-384-512v128h128V768h-128zm0 256v128h128v-128h-128zm0 256v128h128v-128h-128zm0 256v128h128v-128h-128zM768 768v128h128V768H768zm0 256v128h128v-128H768zm0 256v128h128v-128H768zm0 256v128h128v-128H768zm-384-512v128h128v-128H384zm0 256v128h128v-128H384zm0 256v128h128v-128H384zM1664 128h384v256H0V128h384V0h128v128h1024V0h128v128z'
      }
    }
  }
}
