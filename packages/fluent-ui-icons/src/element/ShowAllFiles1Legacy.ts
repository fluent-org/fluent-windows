export default {
  type: 'svg',
  props: {
    width: '1792',
    height: '1792',
    viewBox: '0 0 1792 1792',
    xmlns: 'http://www.w3.org/2000/svg',
    children: {
      type: 'path',
      props: {
        transform: 'scale(1.75 1.75) translate(0 0)',
        d: 'M64 64h448v448h-448v-448zm384 384v-320h-320v320h320z'
      }
    }
  }
}
