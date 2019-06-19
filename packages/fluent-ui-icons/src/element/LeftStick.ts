export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1024 1536h256v128H896v-640h128v512zm896-896q24 0 47 11t41 29 29 41 11 47v256q0 24-11 47t-29 41-41 29-47 11h-385v640h-127v-768h507l5-5V773l-5-5H133l-5 5v246l5 5h507v768H512v-640H128q-24 0-47-11t-41-29-29-41-11-47V768q0-24 11-47t29-41 41-29 47-11h1792z'
      }
    }
  }
}
