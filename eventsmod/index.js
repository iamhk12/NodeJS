const { ok } = require("assert");
const EventEmitter = require("events")
const event = new EventEmitter();

const http = require("http");
const { Stream } = require("stream");

// console.log(event)

// event.on("sayMyName", () => {
//     console.log("Your name is HK")
// })
// event.on("sayMyName", () => {
//     console.log("Your name is HK")
// })
// event.on("sayMyName", () => {
//     console.log("Your name is HK")
// })

event.on("checkpage",(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`)
})

event.emit("checkpage", 200, 'ok');




