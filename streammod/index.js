const fs = require("fs");
const http = require("http")

const server = http.createServer();

server.on('request', (req, res) => {
    // fs.readFile('input.txt','utf-8',(err,data)=>{
    //     if(err)
    //     console.log(err);
    //     else
    //     res.end(data)
    // })

    // const rstream = fs.createReadStream("input.txt","utf-8")

    //     rstream.on('data',(chunkdata)=>{
    //         res.write(chunkdata)
    //     })
    //     rstream.on('end',()=>{
    //         res.end();
    //     })
    //     rstream.on('error',(err)=>{
    //         console.log(err);
    //         res.end('File not Found')
    //     })

    //3rd way

    const rstream = fs.createReadStream('input.txt')
    rstream.pipe(res);

})

server.listen(80, "127.0.0.1")