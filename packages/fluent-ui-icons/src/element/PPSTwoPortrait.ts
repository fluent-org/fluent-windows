export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1920 128v1664H0V128h1920zm-128 128H128v1408h1664V256zM256 1408V512h1408v896H256zm768-128h512V640h-512v640zm-128 0V640H384v640h512zM512 768h256v128H512V768zm0 256h256v128H512v-128zm640-256h256v128h-256V768zm0 256h256v128h-256v-128z'
      }
    }
  }
}
