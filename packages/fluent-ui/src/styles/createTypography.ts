import * as CSS from 'csstype'
import { Style } from 'jss'
import { deepMerge } from '../utils'

interface Variants {
  h1?: any
  h2?: any
  h3?: any
  h4?: any
  h5?: any
  h6?: any
  subtitle1?: any
  subtitle2?: any
  body1?: any
  body2?: any
}

export interface Typographies {
  fontFamily?: CSS.FontFamilyProperty
  fontSize?: CSS.FontSizeProperty<number>
  htmlFontSize?: CSS.FontSizeProperty<number>
  fontWeightLight?: number
  fontWeightRegular?: number
  fontWeightMedium?: number
  fontWeightBold?: number
  variants?: Variants
}

export const defaultFontFamily = [
  'Segoe UI',
  '-apple-system',
  'sans-serif',
  'Roboto',
  'Helvetica',
  'Arial'
].join(',')
export const defaultFontSize = 14
export const defaultHtmlFontSize = 16
export const defaultFontWeightLight = 300
export const defaultFontWeightRegular = 400
export const defaultFontWeightMedium = 500
export const defaultFontWeightBold = 700

const coef = defaultFontSize / 14
const pxToRem = (size: number): string => `${(size / defaultHtmlFontSize) * coef}rem`
const buildVariant = (fontWeight: number, size: number, lineHeight: number): Style => ({
  fontFamily: defaultFontFamily,
  fontWeight: fontWeight,
  fontSize: pxToRem(size),
  lineHeight: lineHeight
})

export const defaultVariants: Variants = {
  h1: buildVariant(defaultFontWeightLight, 96, 1),
  h2: buildVariant(defaultFontWeightLight, 60, 1),
  h3: buildVariant(defaultFontWeightRegular, 48, 1.04),
  h4: buildVariant(defaultFontWeightRegular, 34, 1.17),
  h5: buildVariant(defaultFontWeightRegular, 24, 1.33),
  h6: buildVariant(defaultFontWeightMedium, 20, 1.6),
  subtitle1: buildVariant(defaultFontWeightRegular, 16, 1.75),
  subtitle2: buildVariant(defaultFontWeightMedium, 14, 1.57),
  body1: buildVariant(defaultFontWeightRegular, 16, 1.5),
  body2: buildVariant(defaultFontWeightRegular, 14, 1.43)
}

function createTypography(typographies: Typographies): Typographies {
  const {
    fontFamily = defaultFontFamily,
    fontSize = defaultFontSize,
    htmlFontSize = defaultHtmlFontSize,
    fontWeightLight = defaultFontWeightLight,
    fontWeightRegular = defaultFontWeightRegular,
    fontWeightMedium = defaultFontWeightMedium,
    fontWeightBold = defaultFontWeightBold,
    variants = defaultVariants
  } = typographies
  const defaultTypographies = {
    fontFamily,
    fontSize,
    htmlFontSize,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold,
    variants
  }
  return deepMerge(defaultTypographies, typographies)
}

export default createTypography
