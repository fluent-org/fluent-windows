export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M0 384h2048v1152H0V384zm128 128v896h1280V512H128zm1792 896V512h-384v896h384zM989 643l317 317-317 317-90-90 162-163H640V896h421L899 733z'
      }
    }
  }
}
