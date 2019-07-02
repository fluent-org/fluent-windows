import { readdir, readFile, writeFile, PathLike } from 'fs'
import { resolve } from 'path'
import { promisify } from 'util'
import * as SVGO from 'svgo'
// @ts-ignore
import * as htm from 'htm'
function h(type: string, props: any, ...children: any[]): any {
  return [type, props, ...children]
}
const html = htm.bind(h)
// @ts-ignore
import * as omitDeep from 'omit-deep-lodash'
import * as prettier from 'prettier'

const readdirAsync = promisify(readdir)
const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

const basePath = resolve(__dirname, './svg')

const svgo = new SVGO({
  floatPrecision: 4,
  plugins: [
    { cleanupAttrs: true },
    { removeDoctype: true },
    { removeXMLProcInst: true },
    { removeComments: true },
    { removeMetadata: true },
    { removeTitle: true },
    { removeDesc: true },
    { removeUselessDefs: true },
    { removeXMLNS: true },
    { removeEditorsNSData: true },
    { removeEmptyAttrs: true },
    { removeHiddenElems: true },
    { removeEmptyText: true },
    { removeEmptyContainers: true },
    { removeViewBox: true },
    { cleanupEnableBackground: true },
    { minifyStyles: true },
    { convertStyleToAttrs: true },
    { convertColors: true },
    { convertPathData: true },
    { convertTransform: true },
    { removeUnknownsAndDefaults: true },
    { removeNonInheritableGroupAttrs: true },
    { removeUselessStrokeAndFill: true },
    { removeUnusedNS: true },
    { cleanupIDs: true },
    { cleanupNumericValues: true },
    { cleanupListOfValues: true },
    { moveElemsAttrsToGroup: true },
    { moveGroupAttrsToElems: true },
    { collapseGroups: true },
    { removeRasterImages: true },
    { mergePaths: true },
    { convertShapeToPath: true },
    { sortAttrs: true },
    { removeDimensions: true },
    { removeAttrs: true },
    { removeElementsByAttr: true },
    { removeStyleElement: true },
    { removeScriptElement: true }
  ]
})

function toJson(data: any): string {
  return JSON.stringify(data, null, '\t')
}

async function getAllSvgs(path: PathLike): Promise<string[]> {
  return await readdirAsync(path, { encoding: 'utf8' })
}

async function optimizeSvg(svg: string): Promise<any> {
  return await svgo.optimize(svg)
}

async function worker(): Promise<void> {
  const allSvg = await getAllSvgs(basePath)
  const template = await readFileAsync(resolve(__dirname, './template'), { encoding: 'utf8' })
  for (const svg of allSvg) {
    const file = await readFileAsync(resolve(basePath, svg), { encoding: 'utf8' })
    const { data } = await optimizeSvg(file)
    const jsx = (html as any)([data])
    const jsxOmit = omitDeep(jsx, '_owner', '_store', 'key', 'ref')
    const componentName = svg.split('.')[0]
    const jsxReplace = template
      .replace('{{jsx}}', toJson(jsxOmit))
      .replace('{{componentName}}', componentName)
    await writeFileAsync(
      resolve(__dirname, `src/${componentName}.ts`),
      prettier.format(jsxReplace, { singleQuote: true, semi: false, parser: 'typescript' })
    )
  }

  const index = allSvg.reduce((acc, cur): string => {
    const componentName = cur.split('.')[0]
    return acc + `export { default as ${componentName} } from './${componentName}'\n`
  }, '')
  await writeFileAsync(resolve(__dirname, `src/index.ts`), index)
}

worker()
