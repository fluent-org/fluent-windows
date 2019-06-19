export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1664 1024h128v640q0 27-10 50t-27.5 40.5-40.5 27.5-50 10H128q-27 0-50-10t-40.5-27.5T10 1714t-10-50V512q0-27 10-50t27.5-40.5T78 394t50-10h1024v128H128v1152h1536v-640zm-256-128q0-27-10-50t-27.5-40.5T1330 778t-50-10V640q53 0 99.5 20t81.5 55 55 81.5 20 99.5h-128zm-128-512q106 0 199.5 40t163 109.5 109.5 163 40 199.5h-128q0-79-30-149t-82.5-122.5T1429 542t-149-30V384zm0-256q106 0 204.5 27.5T1668 233t155 120 120 155 77.5 183.5T2048 896h-128q0-88-23-170t-64.5-153-100-129.5-129.5-100-153-64.5-170-23V128z'
      }
    }
  }
}
