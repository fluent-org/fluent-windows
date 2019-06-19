export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M2048 896v256H490l459 459-181 181L0 1024l768-768 181 181-459 459h1558z'
      }
    }
  }
}
