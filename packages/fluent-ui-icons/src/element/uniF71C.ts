export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1024 1536v128h256v128H640v-128h256v-128H316l128-128h1348V512H128v580L0 1220V384h1920v1152h-896zM640 987l-531 530-90-90 530-531H319V768h449v449H640V987z'
      }
    }
  }
}
