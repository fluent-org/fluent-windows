export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M512 1408h128v384H512v-384zm128-256v128H512v-128h128z'
      }
    }
  }
}
