export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        transform: 'scale(2.25) translate(0)',
        d:
          'M256 810.5v-597h512v597h-512zm42.5-554.5v512h427v-512h-427zm-298.5 469.5v-427h213.5v427h-213.5zm42.5-384v341h128v-341h-128zm768-43h213.5v427h-213.5v-427zm171 384v-341h-128v341h128z'
      }
    }
  }
}
