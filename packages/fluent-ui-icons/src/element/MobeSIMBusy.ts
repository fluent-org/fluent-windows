export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M896 896V768H768V640h128V512h128v128h128v128h-128v128H896zm135 768q3 33 10 65t18 63H640q-27 0-50-10t-40.5-27.5T522 1714t-10-50V384q0-27 10-50t27.5-40.5T590 266t50-10h864l288 288v515q-31-11-63-18t-65-10V608l-224-224H640v1280h391zm1017-512v384h-384v-128h152q-41-62-108-95t-140-33q-54 0-106 18.5t-92.5 52-65 80.5-24.5 105h-128q0-84 35-154.5t92.5-121.5 132.5-79.5 156-28.5q106 0 199 47t153 135v-182h128zm-416 768q54 0 105.5-18.5t92-52 65.5-80.5 25-105h128q0 84-35 154.5t-92.5 121.5-132.5 79.5-156 28.5q-106 0-199-47t-153-135v182h-128v-384h384v128h-152q41 62 108 95t140 33z'
      }
    }
  }
}
