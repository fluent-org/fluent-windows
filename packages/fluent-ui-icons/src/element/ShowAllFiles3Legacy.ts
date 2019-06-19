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
        d:
          'M448 64h448v832h-832v-448h384v-384zm0 768v-320h-320v320h320zm384 0v-320h-320v320h320zm-320-384h320v-320h-320v320z'
      }
    }
  }
}
