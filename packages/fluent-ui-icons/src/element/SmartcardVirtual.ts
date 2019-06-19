export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1728 384q40 0 75 15t61 41 41 61 15 75v896q0 40-15 75t-41 61-61 41-75 15h-64v256h-128v-256h-128v256h-128v-256h-128v256h-128v-256H896v256H768v-256H640v256H512v-256H384v256H256v-256h-64q-40 0-75-15t-61-41-41-61-15-75V576q0-40 15-75t41-61 61-41 75-15h64V128h128v256h128V128h128v256h128V128h128v256h128V128h128v256h128V128h128v256h128V128h128v256h64zm64 192q0-26-19-45t-45-19H192q-26 0-45 19t-19 45v896q0 26 19 45t45 19h1536q26 0 45-19t19-45V576zM256 640h1408v768H256V640zm128 640h1152V768H384v512z'
      }
    }
  }
}
