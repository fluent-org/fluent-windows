export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1792 768v128H512V768h1280zm0-384v128H512V384h1280zM384 768v128H256V768h128zm0-384v128H256V384h128zm1408 1024v128H512v-128h1280zm0 256v128H512v-128h1280zM384 1408v128H256v-128h128zm0 256v128H256v-128h128zM0 1152h2048v896H0v-896zm1920 768v-640H128v640h1792z'
      }
    }
  }
}
