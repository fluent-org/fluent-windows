export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M1920 896h128v384h-128v384H128V512h1792v384zm-128 640V640H256v896h1536z'
      }
    }
  }
}
