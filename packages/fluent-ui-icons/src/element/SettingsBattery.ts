export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M1920 896h128v256h-128v384H0V512h1920v384zm-128 512V640H128v768h1664z'
      }
    }
  }
}
