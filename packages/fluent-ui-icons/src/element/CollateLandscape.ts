export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M1920 512v896H0V512h1920zM896 640H128v640h768V640zm896 0h-768v640h768V640z'
      }
    }
  }
}
