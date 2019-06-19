export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M1024 1792H896v-128h128v128zm0-256H896V896h128v640z'
      }
    }
  }
}
