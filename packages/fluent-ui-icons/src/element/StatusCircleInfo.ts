export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M896 896h128v640H896V896zm128-256v128H896V640h128z'
      }
    }
  }
}
