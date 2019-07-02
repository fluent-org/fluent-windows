import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 866 2048'
  },
  [
    'path',
    {
      d:
        'M738 675q128 126 128 304 0 89-34 168.5T739 1286t-137.5 93.5T433 1414t-168.5-34.5T127 1286t-93-138.5T0 979q0-90 34-168t92.5-136T263 583.5 430 550q180 0 308 125zm-133 482q73-74 73-178 0-51-19.5-95.5t-52.5-78-77.5-53T433 733t-95.5 19.5-78 53-52.5 78-19 95.5q0 52 19 98t51.5 80.5T335 1212t95 20q101 0 175-75z'
    }
  ]
]

export default createIcon(jsx, 'HalfDullSound')
