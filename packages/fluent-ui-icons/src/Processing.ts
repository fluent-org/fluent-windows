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
        'M837 844q-23 37-53.5 67.5T716 965l51 124-118 48-51-123q-40 10-86 10t-86-10l-51 123-118-48 51-124q-37-23-67.5-53.5T187 844L63 895 15 777l123-51q-10-40-10-86t10-86L15 503l48-118 124 51q46-75 121-121l-51-124 118-48 51 123q40-10 86-10t86 10l51-123 118 48-51 124q75 46 121 121l124-51 48 118-123 51q10 40 10 86t-10 86l123 51-48 118zm-325 52q53 0 99.5-20t81.5-55 55-81.5 20-99.5-20-99.5-55-81.5-81.5-55-99.5-20-99.5 20-81.5 55-55 81.5-20 99.5 20 99.5 55 81.5 81.5 55 99.5 20zm1408 448q0 55-14 111l137 56-48 119-138-57q-59 98-156 156l57 137-119 49-56-137q-56 14-111 14t-111-14l-56 137-119-49 57-137q-98-58-156-156l-138 57-48-119 137-56q-14-56-14-111t14-111l-137-56 48-119 138 57q58-97 156-156l-57-138 119-48 56 137q56-14 111-14t111 14l56-137 119 48-57 138q97 59 156 156l138-57 48 119-137 56q14 56 14 111zm-448 320q66 0 124-25t101.5-68.5 69-102T1792 1344t-25.5-124-69-101.5-101.5-69-124-25.5-124.5 25.5-102 69T1177 1220t-25 124 25 124.5 68.5 102 102 68.5 124.5 25z'
    }
  ]
]

export default createIcon(jsx, 'Processing')
