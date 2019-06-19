export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M2048 640v1280H512V640h1536zm-128 128H640v128h1280V768zm-128-256H384v1152H256V384h1536v128zm-256-256H128v1152H0V128h1536v128z'
      }
    }
  }
}
