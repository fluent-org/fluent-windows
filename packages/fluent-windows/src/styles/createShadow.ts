import * as CSS from 'csstype'

const keyUmbraOpacity = 0.132
const keyPenumbraOpacity = 0.108

function createShadow(...px: number[]): CSS.BoxShadowProperty {
  return [
    `${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${keyUmbraOpacity})`,
    `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${keyPenumbraOpacity})`
  ].join(',')
}

export type Shadows = CSS.BoxShadowProperty[]

const shadows: Shadows = [
  'none',
  createShadow(0, 1.6, 3.6, 0, 0, 0.3, 0.9, 0),
  createShadow(0, 3.2, 7.2, 0, 0, 0.6, 1.8, 0),
  createShadow(0, 6.4, 14.4, 0, 0, 1.2, 3.6, 0),
  createShadow(0, 12.8, 28.8, 0, 0, 2.4, 7.2, 0),
  createShadow(0, 25.6, 57.6, 0, 0, 4.8, 14.4, 0)
]

export default shadows
