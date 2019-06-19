export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M640 256h128v1536H640V256zm768 0v1536h-128V256h128z'
      }
    }
  }
}
