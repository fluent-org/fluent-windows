export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1152 896h896v1152H384v-384H0V0h1152v896zM128 1536h256V896h640V128H128v1408zm1792 384v-896H512v896h1408z'
      }
    }
  }
}
