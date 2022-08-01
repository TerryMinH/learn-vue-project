const fs = require('fs')
const path = require('path')

const nowVersion = new Date()
const version = nowVersion.getTime()
const content = "window._rx_getVersion('" + version + "')"

function isExit(filePath) {
  let isExit = false
  try {
    const stat = fs.statSync(filePath)
    if (stat && stat.isDirectory()) {
      isExit = true
    }
  } catch (error) {
    isExit = false
  }
  if (!isExit) {
    fs.mkdirSync(filePath, 777)
  }
}

function createVersion () {
  // console.log('开始创建版本文件...')
  const CommonPath = path.resolve(__dirname, '..', 'public/v')
  isExit(CommonPath)
  const versionPath = path.resolve(CommonPath, 'version.js')

  fs.writeFile(versionPath, content, function(err) {
    if (err) {
      return console.log('\n' + err + '\n')
    } else {
      return console.log(`
        Tip: version.js create success
        version: ${version}
        版本: ${nowVersion}
      \n`)
    }
  })
}

createVersion()