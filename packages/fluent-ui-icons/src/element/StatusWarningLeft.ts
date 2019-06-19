export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M640 1280v384H512v-384h128zm-128 512h128v128H512v-128z'
      }
    }
  }
}
