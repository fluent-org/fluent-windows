export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M0 1408V512h1408v896H0zm1536-640l512-256v896l-512-256V768z'
      }
    }
  }
}
