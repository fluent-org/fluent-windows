export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M2048 128v1024H282l595 595-90 90-750-749 750-749 90 90-595 595h1638V128h128z'
      }
    }
  }
}
