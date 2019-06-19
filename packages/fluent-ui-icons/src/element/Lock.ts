export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1792 896v1152H256V896h256V522q0-108 39-203t108-166T821.5 41 1024 0t202.5 41T1389 153t108 166 39 203v374h256zm-1152 0h768V522q0-81-29-152.5T1298.5 244t-122-85-152.5-31-152.5 31-122 85T669 369.5 640 522v374zm1024 128H384v896h1280v-896z'
      }
    }
  }
}
