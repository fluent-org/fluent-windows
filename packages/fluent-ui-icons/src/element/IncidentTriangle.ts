export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M1920 2048H0L960 128zm-896-384H896v128h128v-128zm0-128V896H896v640h128z'
      }
    }
  }
}
