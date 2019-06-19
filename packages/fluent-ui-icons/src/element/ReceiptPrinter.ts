export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1792 896q27 0 50 10t40.5 27.5T1910 974t10 50v896H128v-896q0-27 10-50t27.5-40.5T206 906t50-10h256V384q0-53 20-99.5t55-81.5 81.5-55 99.5-20h896q53 0 99.5 20t81.5 55 55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20h-128v256h256zm0-512q0-27-10-50t-27.5-40.5T1714 266t-50-10-50 10-40.5 27.5T1546 334t-10 50v128h128q27 0 50-10t40.5-27.5T1782 434t10-50zM640 896h768V384q0-34 9.5-66.5T1444 256H768q-27 0-50 10t-40.5 27.5T650 334t-10 50v512zm1152 128H256v768h1536v-768zM640 1280H384v-128h256v128z'
      }
    }
  }
}
