export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M0 384h2048v1280H0V384zm256 1152V512H128v1024h128zm1408 0V512H384v1024h1280zm256 0V512h-128v1024h128z'
      }
    }
  }
}
