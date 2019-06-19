export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1024 0q88 0 170 23t153 64.5 129.5 100 100 129.5 64.5 153 23 170q0 69-16.5 131.5T1600 896l-576 1152L448 896q-31-62-47.5-124.5T384 640q0-88 23-170t64.5-153 100-129.5T701 87.5 854 23t170-23zm476 846q0-1 .5-1t.5-1q25-47 38-99t13-105q0-109-41.5-205T1397 267t-168-113.5-205-41.5-205 41.5T651 267 537.5 435 496 640q0 53 13 105t38 99q0 1 .5 1t.5 1l476 952zM768 384h128v512H768V384zm384 0h128v512h-128V384z'
      }
    }
  }
}
