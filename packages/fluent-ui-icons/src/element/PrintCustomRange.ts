export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M896 1152h128v256H768v256H0V640h256V384h768v384H896V512H384v128h384v640h128v-128zM640 768H128v768h512V768zm1408-384v1024h-579l128-128h323V512h-451l-128-128h707zm-358 576l-365 365-90-90 210-211H896V896h549l-210-211 90-90z'
      }
    }
  }
}
