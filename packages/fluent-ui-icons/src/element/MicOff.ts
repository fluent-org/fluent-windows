export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M704 1536q-40 0-75-15t-61-41-41-61-15-75V192q0-40 15-75t41-61 61-41 75-15h512q40 0 75 15t61 41 41 61 15 75v834q-34 11-66 25.5t-62 33.5V192q0-26-19-45t-45-19H704q-26 0-45 19t-19 45v1152q0 26 19 45t45 19h322q-2 2-2.5 20.5t-.5 40.5.5 42 .5 25H704zm896-384q93 0 174.5 35t142.5 96 96 142.5 35 174.5-35 174.5-96 142.5-142.5 96-174.5 35-174.5-35-142.5-96-96-142.5-35-174.5 35-174.5 96-142.5 142.5-96 174.5-35zm-320 448q0 66 25 124.5t68.5 102 102 68.5 124.5 25q47 0 92-13.5t84-39.5l-443-443q-26 39-39.5 84t-13.5 92zm587 176q26-39 39.5-84t13.5-92q0-66-25.5-124t-69-101.5-101.5-69-124-25.5q-47 0-92 13.5t-84 39.5zm-782 144q45 71 107 128H640v-128h256v-128H662q-84 0-158-32t-129-87-87-129-32-158v-362h128v362q0 57 22 108t59.5 88.5T554 1642t108 22h362v256h61z'
      }
    }
  }
}
