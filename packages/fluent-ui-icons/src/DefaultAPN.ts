import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d:
        'M1269 1024q0 51-19.5 95.5T1197 1197t-77.5 52.5-95.5 19.5-95.5-19.5T851 1197t-52.5-77.5T779 1024t19.5-95.5T851 851t77.5-52.5T1024 779t95.5 19.5T1197 851t52.5 77.5 19.5 95.5zm-245 139q29 0 54.5-11t44-29.5 29.5-44 11-54.5-11-54.5-29.5-44-44-29.5-54.5-11-54.5 11-44 29.5-29.5 44-11 54.5 11 54.5 29.5 44 44 29.5 54.5 11zM383 383q-64 64-113.5 138T186 677t-51.5 169.5T117 1024t17.5 177.5T186 1371t83.5 156T383 1665l-75 75q-72-71-127-154t-93-174-57.5-189T11 1024t19.5-199T88 636t93-174 127-154zm1163 609q-7-97-45-183t-107-155l75-75q85 85 130 190t52 223h-105zM654 654q-74 74-113.5 169.5T501 1024t39.5 200.5T654 1394l-75 75q-89-90-136.5-204.5T395 1024t47.5-240.5T579 579zm1260 885q6 30 6 61t-6 61l124 51-49 119-124-52q-35 51-86 86l52 124-119 49-51-124q-30 6-61 6t-61-6l-51 124-119-49 52-124q-51-35-86-86l-124 52-49-119 124-51q-6-30-6-61t6-61l-124-51 49-119 124 52q35-51 86-86l-52-124 119-49 51 124q30-6 61-6t61 6l51-124 119 49-52 124q51 35 86 86l124-52 49 119zm-314 253q40 0 75-15t61-41 41-61 15-75-15-75-41-61-61-41-75-15-75 15-61 41-41 61-15 75q0 39 15 74t41.5 61.5 61.5 41.5 74 15zm331-768q0-91-17.5-178.5t-51.5-169-83.5-155.5T1665 383l75-75q72 71 127 154t93 174 57.5 189 19.5 199q0 32-2.5 65t-6.5 65l-101-45q2-21 3-42.5t1-42.5z'
    }
  ]
]

export default createIcon(jsx, 'DefaultAPN')
