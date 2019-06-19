export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M2048 512v896H0V512h2048zM512 769h1024V640H512v129zm1408-129h-256v256H384V640H128v640h1792V640zM320 1024q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zm256 0q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19z'
      }
    }
  }
}
