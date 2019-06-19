export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M768 2048V0h128v2048H768zM1152 0h128v2048h-128V0z'
      }
    }
  }
}
