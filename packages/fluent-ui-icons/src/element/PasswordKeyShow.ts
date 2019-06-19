export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M512 512h1024v1024H512V512zm896 896V640H640v768h768z'
      }
    }
  }
}
