export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M0 384h2048v1152H0V384zm128 128v896h384V512H128zm1792 896V512H640v896h1280z'
      }
    }
  }
}
