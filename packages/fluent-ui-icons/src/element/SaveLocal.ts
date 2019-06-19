export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1536 0q27 0 50 10t40.5 27.5T1654 78t10 50v1152H549l-165-165V128q0-27 10-50t27.5-40.5T462 10t50-10h1024zM768 512h512V128H768v384zm512 384H768v256h128v-128h128v128h256V896zm256-768h-128v512H640V128H512v933l91 91h37V768h768v384h128V128zm-237 1491l90 90-301 302-301-302 90-90 147 147v-358h128v358z'
      }
    }
  }
}
