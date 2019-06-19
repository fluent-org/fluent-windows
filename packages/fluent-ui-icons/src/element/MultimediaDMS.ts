export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M960 1280q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zm0-256q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zm0-256q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zm192 128l896 448-896 448V896zm128 689l482-241-482-241v482zm-256 335h512v128H384v-128h512v-256H512V0h896v832l-128-64V128H640v1408h384v384z'
      }
    }
  }
}
