export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M256 1792V256h128v1536H256zm448-768l1088-768v1536zm960 521V503l-738 521z'
      }
    }
  }
}
