/* eslint-disable no-console */
import { readdir, readFile, stat, writeFile } from 'fs'
import { extname, basename, resolve } from 'path'
import { promisify } from 'util'

import * as prettier from 'prettier'
// @ts-ignore
import * as htm from 'htm'

function toHump(name: string, capitalized: boolean = true): string {
  return capitalized
    ? name
        .replace(/-(\w)/g, (all, letter): string => letter.toUpperCase())
        .replace(/( |^)[a-z]/g, (all): string => all.toUpperCase())
    : name.replace(/-(\w)/g, (all, letter): string => letter.toUpperCase())
}

function h(type: string, props: any, ...children: any[]): any {
  const allPropKey = props ? Object.keys(props) : []
  const match = allPropKey.find((prop): boolean => prop.includes('-'))
  if (match) {
    props[toHump(match, false)] = props[match]
    delete props[match]
  }
  return { type, props, children }
}
const html = htm.bind(h)

const readdirAsync = promisify(readdir)
const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)
const statAsync = promisify(stat)

const basePath = resolve(__dirname, './remix')

function toJson(data: object): string {
  return JSON.stringify(data, null, '\t')
}

async function getAllSvgs(dir: string): Promise<string[]> {
  const files = await readdirAsync(dir)
  const allFiles = await Promise.all(
    files.map(
      (file): Promise<Promise<string[]> | string> => {
        const path = resolve(dir, file)
        // @ts-ignore
        return statAsync(path).then((stat): Promise<string[]> | string =>
          stat.isDirectory() ? getAllSvgs(path) : path
        )
      }
    )
  )
  return Array.prototype.concat(...allFiles).filter((file): boolean => extname(file) === '.svg')
}

function getComponentName(fileName: string, withSuffix: boolean): string {
  return withSuffix ? basename(fileName) : basename(fileName).split('.')[0]
}

async function worker(): Promise<void> {
  try {
    const allSvg = await getAllSvgs(basePath)
    const template = await readFileAsync(resolve(__dirname, './template'), { encoding: 'utf8' })
    for (const svg of allSvg) {
      const data = await readFileAsync(svg, { encoding: 'utf8' })
      const jsx = html([data])
      const componentName = getComponentName(svg, false)
      const jsxReplace = template
        .replace('{{jsx}}', toJson(jsx))
        .replace('{{componentName}}', componentName)
      await writeFileAsync(
        resolve(__dirname, `src/${componentName}.ts`),
        prettier.format(jsxReplace, { singleQuote: true, semi: false, parser: 'typescript' })
      )
    }

    const index = allSvg.reduce((acc, cur): string => {
      const componentName = getComponentName(cur, false)
      return acc + `export { default as ${toHump(componentName)} } from './${componentName}'\n`
    }, '')
    await writeFileAsync(resolve(__dirname, `src/index.ts`), index)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

worker()
