export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M2048 290l-734 734 734 734-290 290-734-734-734 734L0 1758l734-734L0 290 290 0l734 734L1758 0l290 290z'
      }
    }
  }
}
