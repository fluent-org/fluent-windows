export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1600 768q40 0 75 15t61 41 41 61 15 75v512q0 119-45.5 224T1623 1879t-183 123.5-224 45.5q-144 0-268.5-55T722 1837l-472-472q-28-28-43-65t-15-76q0-42 16-78.5t43-63.5 63.5-42.5T392 1024q40 0 76 15.5t65 43.5l107 106V384H128V256h512v-64q0-40 15-75t41-61 61-41 75-15 75 15 61 41 41 61 15 75v64h549l-114-115 90-90 269 269-269 269-90-90 114-115h-549v267q33-11 64-11 50 0 93 23.5t69 65.5q45-25 94-25 50 0 93 23.5t69 65.5q45-25 94-25zm64 192q0-26-19-45t-45-19q-34 0-47.5 19t-16 47.5-.5 61.5-.5 61.5-16 47.5-47.5 19q-37 0-50.5-23.5T1406 1069t2-77 2-77-15.5-59.5T1344 832q-34 0-47.5 19t-16 47.5-.5 61.5-.5 61.5-16 47.5-47.5 19q-37 0-50.5-23.5T1150 1005t2-77 2-77-15.5-59.5T1088 768q-34 0-47.5 19t-16 47.5-.5 61.5-.5 61.5-16 47.5-47.5 19q-26 0-45-19t-19-45V192q0-26-19-45t-45-19-45 19-19 45v1043q0 23-8.5 42.5t-23 34.5-34.5 23.5-42 8.5-42.5-8-36.5-24l-139-139q-21-21-50-21t-50.5 21-21.5 51q0 29 21 50l472 473q84 84 184 128.5t219 44.5q93 0 174.5-35.5t142-96 96-142T1664 1472V960z'
      }
    }
  }
}
