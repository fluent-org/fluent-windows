export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M896 2048V512h256v1536H896zM896 0h256v256H896V0z'
      }
    }
  }
}
