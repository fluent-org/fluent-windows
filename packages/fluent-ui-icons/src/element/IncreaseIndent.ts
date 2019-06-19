export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1024 384h1024v128H1024V384zm0 1152v-128h1024v128H1024zm0-512V896h1024v128H1024zm768-384v128h-768V640h768zm0 512v128h-768v-128h768zM483 733l90-90 317 317-317 317-90-90 163-163H0V896h646z'
      }
    }
  }
}
