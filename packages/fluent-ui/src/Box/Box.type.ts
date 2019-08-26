// https://www.smooth-code.com/open-source/xstyled/docs/system-props/
import * as CSS from 'csstype'
import * as React from 'react'
import * as PropTypes from 'prop-types'
import { StandardProps } from '..'

export interface ResponsiveType<T> {
  xs?: T
  sm?: T
  md?: T
  lg?: T
  xl?: T
}
export type SpaceBaseTypes = number | string | 'auto'
export type SpaceTypes = SpaceBaseTypes | ResponsiveType<SpaceBaseTypes>
export type LayoutTypes = SpaceTypes
export type GridTypes = boolean | 'auto' | ResponsiveType<number>

export interface StylesProps {
  /**
   * Space
   */
  margin?: SpaceTypes
  marginTop?: SpaceTypes
  marginRight?: SpaceTypes
  marginBottom?: SpaceTypes
  marginLeft?: SpaceTypes
  // alias for margin
  m?: SpaceTypes
  // alias for marginTop
  mt?: SpaceTypes
  // alias for marginRight
  mr?: SpaceTypes
  // alias for marginBottom
  mb?: SpaceTypes
  // alias for marginLeft
  ml?: SpaceTypes
  // alias for margin-left and margin-right
  mx?: SpaceTypes
  // alias for margin-top and margin-bottom
  my?: SpaceTypes
  padding?: SpaceTypes
  paddingTop?: SpaceTypes
  paddingRight?: SpaceTypes
  paddingBottop?: SpaceTypes
  paddingLeft?: SpaceTypes
  // alias for padding
  p?: SpaceTypes
  // alias for paddingTop
  pt?: SpaceTypes
  // alias for paddingRight
  pr?: SpaceTypes
  // alias for paddingBottom
  pb?: SpaceTypes
  // alias for paddingLeft
  pl?: SpaceTypes
  // alias for padding-left and padding-right
  px?: SpaceTypes
  // alias for padding-top and padding-bottom
  py?: SpaceTypes
  space?: SpaceTypes
  /**
   * Layout
   */
  display?: LayoutTypes
  width?: LayoutTypes
  height?: LayoutTypes
  maxWidth?: LayoutTypes
  minWidth?: LayoutTypes
  maxHeight?: LayoutTypes
  minHeight?: LayoutTypes
  size?: LayoutTypes
  verticalAlign?: CSS.VerticalAlignProperty<SpaceBaseTypes>
  layout?: CSS.DisplayProperty | LayoutTypes | CSS.VerticalAlignProperty<SpaceBaseTypes>
  /**
   * XGrids
   */
  row?: boolean
  col?: GridTypes
  /**
   * Typography
   */
  fontFamily?: CSS.FontFamilyProperty
  fontSize?:
    | CSS.FontSizeProperty<number | string>
    | ResponsiveType<CSS.FontSizeProperty<number | string>>
  fontWeight?: CSS.FontWeightProperty
  lineHeight?: CSS.LineHeightProperty<number>
  textAlign?: CSS.TextAlignProperty
  letterSpacing?: CSS.LetterSpacingProperty<string | number>
  color?: CSS.ColorProperty
  textTransform?: CSS.TextTransformProperty
  typography?: string
  /**
   * Flexboxes
   */
  alignItems?: CSS.AlignItemsProperty
  alignContent?: CSS.AlignContentProperty
  justifyContent?: CSS.JustifyContentProperty
  justifyItems?: CSS.JustifyItemsProperty
  flexWrap?: CSS.FlexWrapProperty
  flexBasis?: CSS.FlexBasisProperty<number>
  flexDirection?: CSS.FlexDirectionProperty
  flex?: CSS.FlexProperty<number>
  justifySelf?: CSS.JustifySelfProperty
  alignSelf?: CSS.AlignSelfProperty
  order?: number | CSS.Globals
  flexboxes?: string
  /**
   * Grids
   */
  gridGap?: CSS.GridGapProperty<number>
  gridColumnGap?: CSS.GridColumnGapProperty<'normal'>
  gridRowGap?: CSS.GridRowGapProperty<'normal'>
  gridColumn?: CSS.GridColumnProperty
  gridRow?: CSS.GridRowProperty
  gridAutoFlow?: CSS.GridAutoFlowProperty
  gridAutoColumns?: CSS.GridAutoColumnsProperty<number>
  gridAutoRows?: CSS.GridAutoRowsProperty<number>
  gridTemplateColumns?: CSS.GridTemplateColumnsProperty<'none' | number>
  gridTemplateRows?: CSS.GridTemplateRowsProperty<'none' | number>
  gridTemplateAreas?: CSS.GridTemplateAreasProperty
  gridArea?: CSS.GridAreaProperty
  grids?: string
  /**
   * Backgrounds
   */
  background?: CSS.BackgroundProperty<number>
  backgroundColor?: CSS.BackgroundColorProperty
  backgroundImage?: CSS.BackgroundImageProperty
  backgroundSize?: CSS.BackgroundSizeProperty<number>
  backgroundPosition?: CSS.BackgroundPositionProperty<number>
  backgroundRepeat?: CSS.BackgroundRepeatProperty
  backgrounds?: string
  /**
   * Positioning
   */
  position?: CSS.PositionProperty
  zIndex?: CSS.ZIndexProperty
  top?: CSS.TopProperty<number>
  right?: CSS.TopProperty<number>
  bottom?: CSS.TopProperty<number>
  left?: CSS.TopProperty<number>
  positioning?: string
  /**
   * Borders
   */
  border?: CSS.BorderProperty<'inherit'>
  borderTop?: CSS.BorderTopProperty<number>
  borderTopColor?: CSS.BorderTopColorProperty
  borderRight?: CSS.BorderRightProperty<number>
  borderRightColor?: CSS.BorderRightProperty<number>
  borderBottom?: CSS.BorderBottomProperty<number>
  borderBottomColor?: CSS.BorderBottomProperty<number>
  borderLeft?: CSS.BorderLeftProperty<number>
  borderLeftColor?: CSS.BorderLeftProperty<number>
  borderColor?: CSS.BorderColorProperty
  borderWidth?: CSS.BorderWidthProperty<number>
  borderStyle?: CSS.BorderStyleProperty
  borderRadius?: CSS.BorderRadiusProperty<number>
  boxShadow?: CSS.BoxShadowProperty
  borders?: string
  /**
   * Basics
   */
  opacity?: LayoutTypes
  overflow?: CSS.OverflowProperty
  transition?: CSS.TransitionProperty
  basics?: string
}

export interface BoxProps extends StylesProps, StandardProps {
  acrylic?: boolean
  children?: React.ReactNode
  as?: keyof JSX.IntrinsicElements
}

export const BoxPropTypes = {
  acrylic: PropTypes.bool,
  children: PropTypes.node,
  as: PropTypes.oneOf<
    | 'symbol'
    | 'object'
    | 'style'
    | 'title'
    | 'time'
    | 'link'
    | 'menu'
    | 'dialog'
    | 'text'
    | 'p'
    | 'col'
    | 'a'
    | 'abbr'
    | 'address'
    | 'area'
    | 'article'
    | 'aside'
    | 'audio'
    | 'b'
    | 'base'
    | 'bdi'
    | 'bdo'
    | 'big'
    | 'blockquote'
    | 'body'
    | 'br'
    | 'button'
    | 'canvas'
    | 'caption'
    | 'cite'
    | 'code'
    | 'colgroup'
    | 'data'
    | 'datalist'
    | 'dd'
    | 'del'
    | 'details'
    | 'dfn'
    | 'div'
    | 'dl'
    | 'dt'
    | 'em'
    | 'embed'
    | 'fieldset'
    | 'figcaption'
    | 'figure'
    | 'footer'
    | 'form'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'head'
    | 'header'
    | 'hgroup'
    | 'hr'
    | 'html'
    | 'i'
    | 'iframe'
    | 'img'
    | 'input'
    | 'ins'
    | 'kbd'
    | 'keygen'
    | 'label'
    | 'legend'
    | 'li'
    | 'main'
    | 'map'
    | 'mark'
    | 'menuitem'
    | 'meta'
    | 'meter'
    | 'nav'
    | 'noindex'
    | 'noscript'
    | 'ol'
    | 'optgroup'
    | 'option'
    | 'output'
    | 'param'
    | 'picture'
    | 'pre'
    | 'progress'
    | 'q'
    | 'rp'
    | 'rt'
    | 'ruby'
    | 's'
    | 'samp'
    | 'script'
    | 'section'
    | 'select'
    | 'small'
    | 'source'
    | 'span'
    | 'strong'
    | 'sub'
    | 'summary'
    | 'sup'
    | 'table'
    | 'template'
    | 'tbody'
    | 'td'
    | 'textarea'
    | 'tfoot'
    | 'th'
    | 'thead'
    | 'tr'
    | 'track'
    | 'u'
    | 'ul'
    | 'var'
    | 'video'
    | 'wbr'
    | 'webview'
    | 'svg'
    | 'animate'
    | 'animateMotion'
    | 'animateTransform'
    | 'circle'
    | 'clipPath'
    | 'defs'
    | 'desc'
    | 'ellipse'
    | 'feBlend'
    | 'feColorMatrix'
    | 'feComponentTransfer'
    | 'feComposite'
    | 'feConvolveMatrix'
    | 'feDiffuseLighting'
    | 'feDisplacementMap'
    | 'feDistantLight'
    | 'feDropShadow'
    | 'feFlood'
    | 'feFuncA'
    | 'feFuncB'
    | 'feFuncG'
    | 'feFuncR'
    | 'feGaussianBlur'
    | 'feImage'
    | 'feMerge'
    | 'feMergeNode'
    | 'feMorphology'
    | 'feOffset'
    | 'fePointLight'
    | 'feSpecularLighting'
    | 'feSpotLight'
    | 'feTile'
    | 'feTurbulence'
    | 'filter'
    | 'foreignObject'
    | 'g'
    | 'image'
    | 'line'
    | 'linearGradient'
    | 'marker'
    | 'mask'
    | 'metadata'
    | 'mpath'
    | 'path'
    | 'pattern'
    | 'polygon'
    | 'polyline'
    | 'radialGradient'
    | 'rect'
    | 'stop'
    | 'switch'
    | 'textPath'
    | 'tspan'
    | 'use'
    | 'view'
  >([
    'symbol',
    'object',
    'style',
    'title',
    'time',
    'link',
    'menu',
    'dialog',
    'text',
    'p',
    'col',
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'main',
    'map',
    'mark',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noindex',
    'noscript',
    'ol',
    'optgroup',
    'option',
    'output',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'sub',
    'summary',
    'sup',
    'table',
    'template',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'webview',
    'svg',
    'animate',
    'animateMotion',
    'animateTransform',
    'circle',
    'clipPath',
    'defs',
    'desc',
    'ellipse',
    'feBlend',
    'feColorMatrix',
    'feComponentTransfer',
    'feComposite',
    'feConvolveMatrix',
    'feDiffuseLighting',
    'feDisplacementMap',
    'feDistantLight',
    'feDropShadow',
    'feFlood',
    'feFuncA',
    'feFuncB',
    'feFuncG',
    'feFuncR',
    'feGaussianBlur',
    'feImage',
    'feMerge',
    'feMergeNode',
    'feMorphology',
    'feOffset',
    'fePointLight',
    'feSpecularLighting',
    'feSpotLight',
    'feTile',
    'feTurbulence',
    'filter',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'marker',
    'mask',
    'metadata',
    'mpath',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'switch',
    'textPath',
    'tspan',
    'use',
    'view'
  ])
}
