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
        'M1792 384q0 72-25.5 137.5t-71 116.5-107 84.5T1455 765l-1 3h210v1280H384v-768H192q-40 0-75-15t-61-41-41-61-15-75 15-75 41-61 61-41 75-15h192V768h103q-4-11-13-37.5T453.5 671 430 602t-22.5-68-17-55.5T384 447V64q0-26 19-45t45-19q28 0 47 21 9 10 33 35t54.5 58 64 69.5 62 68.5 48 55.5T778 338l142 430h186l36-108q-57-54-87.5-126T1024 384q0-79 30-149t82.5-122.5 122-82.5T1408 0q79 0 149 30t122.5 82.5T1762 235t30 149zm-384-256q-53 0-99.5 20t-81.5 55-55 81.5-20 99.5 20 99.5 55 81.5 81.5 55 99.5 20 99.5-20 81.5-55 55-81.5 20-99.5-20-99.5-55-81.5-81.5-55-99.5-20zm-156 607l-11 33h79l3-10q-35-7-71-23zM512 229v209q0 1 4 12.5t8.5 25.5 8.5 26.5 5 14.5l148-49-26-76zm57 379l53 160h164l-70-209zm-377 544h192v-128H192q-26 0-45 19t-19 45 19 45 45 19zm1344 768V896H512v256h267q10-29 28-52.5t42-40.5 52.5-26 58.5-9q40 0 75 15t61 41 41 61 15 75-15 75-41 61-61 41-75 15q-30 0-58.5-9t-52.5-26-42-40.5-28-52.5H512v640h1024zm-640-704q0 26 19 45t45 19 45-19 19-45-19-45-45-19-45 19-19 45z'
    }
  ]
]

export default createIcon(jsx, 'uniF69E')
