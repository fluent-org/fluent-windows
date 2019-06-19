export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M512 0l1024 1024L512 2048V0zm256 618v812l406-406z'
      }
    }
  }
}
