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
          'M256 810.5v-597h512v597h-512zm42.5-554.5v512h427v-512h-427zm512 42.5h128v427h-128v-43h85.5v-341h-85.5v-43zm-725 427v-427h128v43h-85.5v341h85.5v43h-128z'
      }
    }
  }
}
