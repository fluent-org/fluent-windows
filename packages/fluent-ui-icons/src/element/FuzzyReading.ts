export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1728 0q66 0 124 25.5t101.5 69 69 101.5 25.5 124v768q0 66-25.5 124.5t-69 102T1852 1383t-124 25h-320v640H0V640h640V320q0-66 25-124t68.5-101.5 102-69T960 0h768zm-448 768H128v1152h1152V768zm640-448q0-40-15-75t-41-61-61-41-75-15H960q-40 0-75 15t-61 41-41 61-15 75v320h640v640h320q40 0 75-15t61-41 41-61 15-75V320zM768 1024H640V896h128v128zm0 256H640v-128h128v128zm384 128h-128v-128h128v128zm-384 0v-128h128v128H768z'
      }
    }
  }
}
