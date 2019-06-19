export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M1920 896v128h-896v896H896v-896H0V896h896V0h128v896h896z'
      }
    }
  }
}
