export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1050 1600l227 227-90 90-227-227-227 227-90-90 227-227-227-227 90-90 227 227 227-227 90 90zm742-1344q27 0 50 10t40.5 27.5T1910 334t10 50v640h-896v224l-64 64-64-64v-224H0V384q0-27 10-50t27.5-40.5T78 266t50-10h1664zm0 128H128v512h1664V384zm-192 256q-26 0-45-19t-19-45 19-45 45-19 45 19 19 45-19 45-45 19zm-288 896h608v128h-608l-64-64zm-640 64l-64 64H0v-128h608z'
      }
    }
  }
}
