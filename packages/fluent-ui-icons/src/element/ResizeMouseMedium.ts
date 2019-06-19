export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M2048 0v2048H0V0h2048zm-128 128H128v896h896v896h896V128z'
      }
    }
  }
}
