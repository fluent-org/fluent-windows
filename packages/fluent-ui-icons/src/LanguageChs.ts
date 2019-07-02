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
        'M256 2048V832h128v1216H256zM439 563q52 45 100.5 92.5T636 754l-77 70q-44-54-90-104.5T374 619zm176-124l69-50q38 36 72.5 73.5T825 539l-81 61q-31-42-63-82t-66-79zm153 329V640h1152v1155q0 253-254 253-121 0-241-6-4-31-13-61t-17-60q66 5 130.5 7.5t130.5 2.5q28 0 52.5-7t43-21 29.5-36.5 11-52.5V768H768zm756-381q38 37 74.5 75t70.5 79l-80 61q-30-44-64-85t-69-82zm12 1277H768v128H640V896h896v768zm-128-640H768v192h640v-192zm-640 512h640v-192H768v192zm320-1152H415q-44 60-92.5 115T222 606l-82-82q102-98 186-210T473 75h131q-23 47-48.5 91.5T504 256h584v128zm312-128h584v128h-673q-44 60-92.5 115T1118 606l-82-82q102-98 186-210t147-239h131q-23 47-48.5 91.5T1400 256z'
    }
  ]
]

export default createIcon(jsx, 'LanguageChs')
