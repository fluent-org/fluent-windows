export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M2048 896v384q0 170-88 328-68 121-190 231-48 44-94.5 78t-83.5 57-62 36-31 16l-27 13q-20-10-23.5-12t-4.5-2q-6-3-30.5-15.5t-62-35.5-84-56.5-94.5-77.5q-60-55-107-112.5T984 1608q-88-158-88-328V896h64q62 0 107-6t79.5-15.5 61-22T1258 827q21-11 43.5-21.5t48-19T1405 773t67-5 67 5 55.5 13.5 48 19T1686 827q24 13 50.5 25.5t61 22T1877 890t107 6h64zm-128 126q-57-3-101-11.5t-79-20-62-24.5-51-25q-19-10-36-18t-35-14-38.5-9.5-45.5-3.5q-26 0-46 3.5t-38 9.5-35 14-36 18q-24 12-51 25t-62 24.5-79 20-101 11.5v258q0 87 26 162t67.5 139 92.5 116 101 91.5 93 66.5 68 41q16-9 39.5-23t52-33.5 60.5-44 64-53.5q232-211 232-462v-258zM128 1152h640v128H0V256h1792v412q-11-4-21-8t-19-9q-20-14-42-24t-46-19V384H128v768z'
      }
    }
  }
}
