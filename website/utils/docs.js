import fs from 'fs'
import { parse } from 'path'
import docs from '../content/docs/docs.json'

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

export function getDocumentsTree () {
  const { articles } = docs
  return articles
}

export function getDocumentsRouterTree (component) {
  let { articles } = docs
  articles = articles.map(e => getRoutesFromNode(e, component))
  return articles.flat()
}

function getRoutesFromNode (node, component) {
  let result = []

  if (node.originalDocumentContent) {
    result.push({
      name: node.name,
      path: `/docs/${node.path.replace(/\s/g, '_')}`,
      component,
      meta: {
        originalDocumentContent: node.originalDocumentContent,
        baseFolder: node.baseFolder
      }
    })
  }

  if (node.children) {
    const tmp = node.children.map(e => getRoutesFromNode(e, component))
    result = [...result, ...tmp.flat()]
  }

  return result
}

export function GetFileContent (path) {
  return fs.readFileSync(path, 'utf8')
}
