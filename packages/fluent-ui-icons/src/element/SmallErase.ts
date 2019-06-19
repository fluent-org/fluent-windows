export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M1408 640v768H640V640h768zm-128 128H768v512h512V768z'
      }
    }
  }
}
