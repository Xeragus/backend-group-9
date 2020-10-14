const path = require('path')

console.log(path.basename('/Users/bobansugareski/backend-group-9/lecture-4/core-exercises.js'))

const directory = '/Users/bobansugareski/backend-group-9/lecture-4'
const fileName = 'bobz.js'

const fileObj = {
  dir: directory,
  base: fileName
}

console.log(path.format(fileObj))