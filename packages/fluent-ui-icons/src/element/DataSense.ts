export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1472 896q119 0 224 45.5t183 123.5 123.5 183 45.5 224-45.5 224-123.5 183-183 123.5-224 45.5-224-45.5-183-123.5-123.5-183-45.5-224 45.5-224 123.5-183 183-123.5 224-45.5zm0 1024q93 0 174.5-35.5t142-96 96-142T1920 1472t-35.5-174.5-96-142-142-96T1472 1024t-174.5 35.5-142 96-96 142T1024 1472t35.5 174.5 96 142 142 96T1472 1920zM128 1152h256v256H128v-256zm384-256h256v512H512V896zm1280 512v128h-640v-128h640zm-256-636q-35-3-68-3-48 0-94.5 6t-93.5 20V384h256v388zm-384 73q-76 40-141 96t-115 127V640h256v205z'
      }
    }
  }
}
