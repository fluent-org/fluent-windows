export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M256 384q-27 0-50 10t-40.5 27.5T138 462t-10 50v128H0V512q0-53 20-99.5T75 331t81.5-55 99.5-20h293L387 93l90-90 317 317-317 317-90-90 162-163H256zM0 768h640v128H0V768z'
      }
    }
  }
}
