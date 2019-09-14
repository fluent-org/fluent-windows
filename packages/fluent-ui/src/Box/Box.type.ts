import * as React from 'react'
import * as PropTypes from 'prop-types'
import {
  SpaceProps,
  ColorProps,
  TypographyProps,
  LayoutProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
  ShadowProps,
  FlexboxProps,
  GridProps
} from 'styled-system'
import { StandardProps } from '..'
import { Theme } from '../styles/createTheme'

export type BoxClassProps = 'root' | 'system' | 'acrylic'

export interface BoxProps
  extends SpaceProps,
    ColorProps,
    TypographyProps,
    LayoutProps,
    BackgroundProps,
    BorderProps,
    PositionProps,
    ShadowProps,
    FlexboxProps,
    GridProps,
    StandardProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement, 'color'> {
  theme?: Theme
  acrylic?: boolean
  children?: React.ReactNode
  as?: React.ElementType
}

export const BoxPropTypes = {
  theme: PropTypes.object,
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
