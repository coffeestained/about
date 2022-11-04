/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{u as e,i as r}from"./maybe.js";import{W as s}from"./WorkerHandle.js";class t extends s{constructor(e=null){super("LercWorker","_decode",{_decode:e=>[e.buffer]},e,{strategy:"dedicated"}),this.schedule=e,this.ref=0}decode(e,r,s){return e&&0!==e.byteLength?this.invoke({buffer:e,options:r},s):Promise.resolve(null)}release(){--this.ref<=0&&(o.forEach(((e,r)=>{e===this&&o.delete(r)})),this.destroy())}}const o=new Map;function n(s=null){let n=o.get(e(s));return n||(r(s)?(n=new t((e=>s.schedule(e))),o.set(s,n)):(n=new t,o.set(null,n))),++n.ref,n}export{n as a};
