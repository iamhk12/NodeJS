const http = require("http");
const fs = require("fs")


const server = http.createServer((req, res) => {
    // console.log(req.url)
    if (req.url == "/")
        res.end("Hello from the home side");
    else if (req.url == "/about")
        res.end("about us side")
    else if (req.url == "/contact")
        res.end("Contact side")
    else if (req.url == "/userapi"){
        // res.end("Hello from the user api")
        fs.readFile(`${__dirname}/userapi/api.json`,"utf-8",(err,data)=>{
            console.log(data);
            const objData = JSON.parse(data);
            res.end(objData.name)
            res.end(data);
        })
    }
    else {
        res.writeHead(404, { "Content-type": "text/html" })
        res.end("<h1>404 Page does not exist</h1>")
    }
});

server.listen(80, "127.0.0.1", () => {
    console.log("listening at port 80")
})
