export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M2048 384v740l-87-92-41 41V512h-128v689l-128 128V512H384v1024h640v128H0V384h2048zM256 512H128v1024h128V512zm1683 771l90 91-557 557-269-269 90-91 179 179z'
      }
    }
  }
}
