import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import { terser } from 'rollup-plugin-terser'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

const name = 'FluentUIIcons'
const input = './src/index.ts'
const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'styled-components': 'StyledComponents'
}
const babelOptions = {
  extensions,
  include: ['src/**/*'],
  exclude: /node_modules/,
  configFile: '../../babel.config.js'
}
const commonjsOptions = {
  ignoreGlobal: true,
  include: /node_modules/,
  namedExports: {
    '../../node_modules/react-is/index.js': [
      'ForwardRef',
      'isLazy',
      'isMemo',
      'isValidElementType',
      'isElement'
    ]
  }
}

export default [
  {
    input,
    output: [
      {
        file: 'build/umd/fluent-ui-icons.development.js',
        format: 'umd',
        name,
        globals
      },
      {
        file: 'build/iife/fluent-ui-icons.development.iife.js',
        format: 'iife',
        name,
        globals
      }
    ],
    external: Object.keys(globals),
    plugins: [
      resolve({ extensions }),
      commonjs(commonjsOptions),
      babel(babelOptions),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') })
    ]
  },
  {
    input,
    output: [
      {
        file: 'build/umd/fluent-ui-icons.production.min.js',
        format: 'umd',
        name,
        globals
      },
      {
        file: 'build/iife/fluent-ui-icons.production.iife.min.js',
        format: 'iife',
        name,
        globals
      }
    ],
    external: Object.keys(globals),
    plugins: [
      resolve({ extensions }),
      commonjs(commonjsOptions),
      babel(babelOptions),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      terser()
    ]
  }
]
