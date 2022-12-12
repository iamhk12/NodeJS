const fs = require("fs");


const bioData = {
    name : "HK",
    age : 18,
    insta : "_hk12" 
};

// console.log(bioData.insta);

// const data = JSON.stringify(bioData);
// console.log(data);

// let obj = JSON.parse(data);
// console.log(obj);

// 1:convert to JSON
// 2:add to new File
// 3:readFile
// 4: again convert back to boject 
// 5: console.log

const jsonData = JSON.stringify(bioData);

// fs.writeFile("bio.json",jsonData,(err)=>{
//     console.log("DONE")
// })

let a = "";
fs.readFile("bio.json","utf-8",(err,data)=>{
    // console.log(data);
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
})
