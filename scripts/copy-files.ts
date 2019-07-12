/* eslint-disable no-console */
import { readFile, writeFile, copyFile } from 'fs'
import { resolve, join, basename } from 'path'
import { promisify } from 'util'

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)
const copyFileAsync = promisify(copyFile)

const packagePath = process.cwd()
const buildPath = join(packagePath, './build')

async function createPackageFile(): Promise<void> {
  const packageData = await readFileAsync(resolve(packagePath, './package.json'), 'utf8')
  const newPackageData = {
    ...JSON.parse(packageData),
    private: false,
    main: './index.js',
    module: './es/index.js',
    typings: './index.d.ts'
  }
  const targetPath = resolve(buildPath, './package.json')

  await writeFileAsync(targetPath, JSON.stringify(newPackageData, null, '\t'), 'utf8')
  console.log(`Created package.json in ${targetPath}`)

  return newPackageData
}

async function includeFileInBuild(file: string): Promise<void> {
  const sourcePath = resolve(packagePath, file)
  const targetPath = resolve(buildPath, basename(file))
  await copyFileAsync(sourcePath, targetPath)
  console.log(`Copied ${sourcePath} to ${targetPath}`)
}

async function worker(): Promise<void> {
  try {
    await createPackageFile()
    const files = ['./README.md', '../../LICENSE', './CHANGELOG.md']
    await Promise.all(
      files.map(
        (file): void => {
          includeFileInBuild(file)
        }
      )
    )
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

worker()
