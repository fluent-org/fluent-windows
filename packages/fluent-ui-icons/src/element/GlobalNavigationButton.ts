export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M2048 640H0V512h2048v128zm0 1024H0v-128h2048v128zm0-513H0v-127h2048v127z'
      }
    }
  }
}
