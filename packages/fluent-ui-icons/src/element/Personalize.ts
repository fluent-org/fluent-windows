export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1024 1792v128h256v128H640v-128h256v-128H0V640h1024L895 768H128v896h1664V896l128-128v1024h-896zm-512-384q27 0 50-10t40.5-27.5T630 1330t10-50q0-49 17.5-93t48-78 72-56.5T868 1025l711-711q28-28 65-43t76-15q41 0 77.5 15.5T1861 314t42.5 63.5T1919 456q0 39-15 76t-43 65l-711 711q-5 48-27 90t-56.5 72.5-78 48T896 1536H256v-128h256zM1720 384q-29 0-50 21l-445 445q57 44 101 101l445-445q21-21 21-50 0-30-21.5-51t-50.5-21zm-678 649q61 40 101 101l92-91q-42-60-102-102zm-18 247q0-27-10-50t-27.5-40.5T946 1162t-50-10-50 10-40.5 27.5T778 1230t-10 50q0 68-34 128h162q26 0 49.5-10t41-27.5 27.5-41 10-49.5z'
      }
    }
  }
}
