export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1920 512h-120l-449 896h-72q-1 28-3.5 70.5t-8 93-15 105-23 107.5-32.5 101-44 84-57 57.5-72 21.5q-53 0-92-37t-67-95.5-46.5-131-29-144-15-133-5.5-99.5h-72L248 512H128V0h128v384h1536V0h128v512zm-896 1408q23-12 41-47.5t32-84.5 23.5-105 16-109 10-97 4.5-69H897q1 25 4.5 69t10 97 16 109 23.5 105 32 84.5 41 47.5zm632-1408H392l384 768h496z'
      }
    }
  }
}
