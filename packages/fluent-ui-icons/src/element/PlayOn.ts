export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M896 768l384 192-384 192V768zm64-384h1088v1152H960l256-128h704V512h-704zM0 1536V384h768v128H128v896h640v128H0z'
      }
    }
  }
}
