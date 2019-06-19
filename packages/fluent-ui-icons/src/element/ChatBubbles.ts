export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M2048 1280h-384v256H640l-384 384v-384H0V384h256V0h1792v1280zm-512-768H128v896h256v203q51-51 100.5-102T587 1408h949V512zm384-384H384v256h1280v768h256V128z'
      }
    }
  }
}
