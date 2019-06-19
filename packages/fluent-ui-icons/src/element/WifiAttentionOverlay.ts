export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M1152 2048H0L576 896zm-512-256H512v128h128v-128zm0-128v-384H512v384h128z'
      }
    }
  }
}
