const os = require('os')

const info = {
    name: os.type(),
    upTime: os.uptime(),
    freeM: os.freemem(),
    uInfo: os.userInfo()
}

console.log(info)