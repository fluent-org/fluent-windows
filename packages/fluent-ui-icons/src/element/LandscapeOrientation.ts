export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M2048 677v1115H0V128h1499zm-512-37h293l-293-293v293zm384 1024V768h-512V256H128v1408h1792z'
      }
    }
  }
}
