const path = require('path')

console.log(path.sep)

const abso = path.resolve(__dirname, 'content')
console.log(abso)

console.log(path.join('/content','/subfolder','test.txt'))
