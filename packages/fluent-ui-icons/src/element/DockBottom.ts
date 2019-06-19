export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M0 384h2048v1152H0V384zm1920 128H128v640h1792V512zM128 1408h1792v-128H128v128z'
      }
    }
  }
}
