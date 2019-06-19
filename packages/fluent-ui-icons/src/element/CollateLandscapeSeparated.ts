export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1920 256v896h-256v-128h128V384h-768v256H896V384H128v640h128v128H0V256h1920zM384 768h1152v896H384V768zm128 768h896V896H512v640z'
      }
    }
  }
}
