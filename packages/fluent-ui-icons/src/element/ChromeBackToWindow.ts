export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M205 1024h819v819H819v-469l-674 674L0 1903l674-674H205v-205zm1169-205h469v205h-819V205h205v469L1903 0l145 145z'
      }
    }
  }
}
