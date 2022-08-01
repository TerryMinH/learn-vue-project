const fs = require('fs')
const path = require('path')

// 排除 某些文件不被移除
exports.PublicExcludes = [
  'favicon.ico',
  'app-reload.js',
  '.md'
]

exports.SrcPagesExcludes = []

exports.lookDir = function(filePath, excludeFiles, callback) {
  filePath = filePath || ''
  excludeFiles = excludeFiles || []
  callback = callback || null
  // console.log('exports.lookDir -- filePath=', filePath)
  fs.readdirSync(filePath).forEach(file => {
    if (file && (!excludeFiles || excludeFiles.indexOf(file) < 0)) {
      const fullPath = path.resolve(filePath, file)
      const fileInfo = fs.statSync(fullPath)
      callback && callback(fullPath, fileInfo, file)
    }
  })
}