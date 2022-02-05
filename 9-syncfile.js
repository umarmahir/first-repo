const {readFileSync, writeFileSync} = require('fs')
const read = readFileSync('./contents/first.txt','utf8')

console.log(read)

writeFileSync('./contents/result.txt','. Addition',{ flag : 'a'})

//flag is used to append