const http = require('http')
const fs = require('fs')
const url = require('url')
const port = 3001

http.createServer( (req,res)=>{

    let urlObject = url.parse(req.url,true)
    let fileName = "." + urlObject.pathname
    
    if(fileName === "./"){
        fileName = "./index.html"
    }

    fs.readFile(fileName, (err,data)=>{
        console.log(fileName)
        if(err){
            res.writeHead(404,{'Content-type':'text/html'});
            res.end("<h1>404 error page not found</h1>")
        }

        if(data){
            
            if(fileName.includes('.html')){
                res.writeHead(202,{'content-type':'text/html'})
                res.end(data)
            }

            if(fileName.includes('.css')){
                res.writeHead(202,{'content-type':'text/css'})
                res.end(data)
            }
        }

    })



}).listen(port)