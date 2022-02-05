
const http = require('http')

const server = http.createServer( (req, res)=>{
        if (req.url === '/'){
            res.end('Welcome')
        }
        if (req.url === '/about'){
            res.end('This is about page')
        } 

        res.end('Ooops! Page can not be found ')
    }
)

server.listen(5000)


