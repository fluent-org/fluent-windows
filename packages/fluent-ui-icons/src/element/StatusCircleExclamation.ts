export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M896 1408h128v128H896v-128zm128-768v640H896V640h128z'
      }
    }
  }
}
