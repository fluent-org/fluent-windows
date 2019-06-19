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
          'M0 768v-512h128v64h-64v384h64v64h-128zm896-512h128v512h-128v-64h64v-384h-64v-64zm-704 576v-640h640v640h-640zm64-576v512h512v-512h-512z'
      }
    }
  }
}
