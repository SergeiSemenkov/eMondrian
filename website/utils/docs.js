import fs from 'fs'
import { parse } from 'path'

export function DirToObjectArray (path) {
  const arr = []
  const content = fs.readdirSync(path, { withFileTypes: true })
  for (let i = 0; i < content.length; i++) {
    const obj = {
      name: content[i].name,
      children: []
    }

    if (content[i].isDirectory()) {
      obj.children = DirToObjectArray(path + content[i].name + '/')
    } else {
      const fileDesc = parse(content[i].name)
      obj.name = fileDesc.name
    }

    arr.push(obj)
  }
  return arr
}

export function DirToListOfItems (path, prefix = '') {
  const arr = []
  const content = fs.readdirSync(path, { withFileTypes: true })
  for (let i = 0; i < content.length; i++) {
    if (content[i].isDirectory()) {
      arr.push(DirToListOfItems(path + content[i].name + '/', prefix + content[i].name + '/'))
    } else {
      const fileDesc = parse(content[i].name)
      if (fileDesc.ext === '.md') {
        arr.push({
          name: prefix + fileDesc.name,
          path: path + content[i].name
        })
      }
    }
  }
  return arr.flat()
}

export function GetFileContent (path) {
  return fs.readFileSync(path, 'utf8')
}
