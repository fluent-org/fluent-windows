export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1536 256h384v384h-128V475l-456 456-91-91 456-456h-165V256zm0 768l128-128v768H0V512h1280l-128 128H128v896h1408v-512z'
      }
    }
  }
}
