export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M1920 384v1280H0V384h1920zM896 512H128v1024h768V512zm896 0h-768v1024h768V512z'
      }
    }
  }
}
