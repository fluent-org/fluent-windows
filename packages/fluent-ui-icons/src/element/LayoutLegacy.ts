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
          'M576 448h448v576h-832v-192h-192v-832h576v448zm-512 320h128v-320h320v-384h-448v704zm896 192v-448h-704v448h704z'
      }
    }
  }
}
