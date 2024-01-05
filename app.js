const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.write("Hello World")
        res.end()
    }
    if(req.url == '/name'){
        res.write("Srisankar")
        res.end()
    }
    if(req.url == '/age'){
        res.write("23")
        res.end()
    }
    if(req.url == '/address'){
        res.write("jaffna")
        res.end()
    }
    else{
        res.end(`<h1>Can't Find the Page`)
    }
    
})

server.listen(3000)
console.log('Hello')