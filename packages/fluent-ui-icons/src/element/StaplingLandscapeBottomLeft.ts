export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M2048 128v1664H0V128h2048zm-128 128H128v1408h1792V256zM531 1517l-256-256 90-90 256 256z'
      }
    }
  }
}
