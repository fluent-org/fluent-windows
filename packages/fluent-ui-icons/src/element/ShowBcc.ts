export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M768 512h1280v128H768V512zm0 640v-128h1280v128H768zm0 512v-128h1280v128H768zM255 768L0 512h512z'
      }
    }
  }
}
