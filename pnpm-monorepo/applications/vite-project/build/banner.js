const pkg = require('../package.json')
const { formatDateString } = require('../src/utils/date')

const time = formatDateString()

module.exports = `/**
 * ${pkg.name}
 * date: ${time}
 */`
