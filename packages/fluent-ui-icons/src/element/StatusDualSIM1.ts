export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M256 0v640H128V182q-30 13-62.5 19T0 207V79q53 0 91.5-20.5T165 0h91z'
      }
    }
  }
}
