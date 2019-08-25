/* eslint-disable no-console */
import { readdir, rename, lstat } from 'fs'
import { join } from 'path'
import { promisify } from 'util'

const readdirAsync = promisify(readdir)
const renameAsync = promisify(rename)
const lstatAsync = promisify(lstat)

const packagePath = process.cwd()
const cjsPath = join(packagePath, './build')
const esPath = join(packagePath, './build/es')

async function getTheTypeFile(buildPath: string): Promise<void> {
  const names = await readdirAsync(buildPath)
  for (const name of names) {
    const path = join(buildPath, name)
    const stat = await lstatAsync(path)
    if (stat.isDirectory()) {
      const components = await readdirAsync(path)
      for (const component of components) {
        if (component.search('.type.d.ts') > -1) {
          const oldPath = join(path, component)
          const newName = component.replace('.type.d.ts', '.type.ts')
          const newPath = join(path, newName)
          await renameAsync(oldPath, newPath)
        }
      }
    }
  }
}

async function worker(): Promise<void> {
  try {
    await getTheTypeFile(cjsPath)
    await getTheTypeFile(esPath)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

worker()
