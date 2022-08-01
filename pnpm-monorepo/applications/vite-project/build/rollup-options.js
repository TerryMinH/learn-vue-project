const path = require('path')
const { lookDir } = require('./look-dir')

const ROOT_PATH = path.resolve(__dirname, '..')
const PAGE_PATH = path.join(ROOT_PATH, '/src/pages')

exports.getInput = function() {
  const input = {
    index: path.resolve(PAGE_PATH, 'index.html')
  }

  lookDir(PAGE_PATH, null, (fullPath, fileInfo, file) => {
    // console.log('fullPath=', fullPath)
    if (fileInfo.isDirectory()) {
      lookDir(fullPath, null, (fullPath2, fileInfo2, file2) => {
        if (fileInfo2.isFile()) {
          if (file2 && file2.length > 5) {
            const len = file2.length
            const fileExt = file2.substr(len - 5, len - 1)
            if (fileExt === '.html') {
              input[file] = fullPath2
            }
          }
        }
      })
    }
  })
  console.log('input=', input)
  return input
}