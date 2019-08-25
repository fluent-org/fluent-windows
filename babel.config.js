const defaultPresets =
  process.env.BABEL_ENV === 'es'
    ? ['@babel/typescript', '@babel/preset-react']
    : ['@babel/preset-env', '@babel/typescript', '@babel/preset-react']

// const defaultAlias = {
//   '@fluent-ui/core': './packages/fluent-ui/src',
//   '@fluent-ui/icons': './packages/fluent-ui-icons/src',
//   '@fluent-ui/hooks': './packages/fluent-ui-hooks/src'
// }

const productionPlugins = ['@babel/proposal-class-properties']

module.exports = {
  presets: defaultPresets,
  env: {
    cjs: {
      plugins: productionPlugins
    },
    es: {
      plugins: productionPlugins
    },
    production: {
      plugins: productionPlugins
    },
    'production-umd': {
      plugins: productionPlugins
    },
    'production-iife': {
      plugins: productionPlugins
    }
  }
}
