const fs = require('fs');

// fs.writeFile("read.txt","Today is a nice day. ",(err)=>{
//     console.log("File is created");
//     console.log(err);
// });

// fs.appendFile("read.txt","\nGreetings, HK.", (err)=>{
// console.log("Data appended");
// });

const filedata = fs.readFile("read.txt","utf-8",(err,data)=>{ console.log(`"Data received : \n ${data}" \nSuccessfully read file data `) })