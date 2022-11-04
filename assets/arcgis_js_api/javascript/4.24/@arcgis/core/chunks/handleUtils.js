/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{i as r}from"./maybe.js";function o(o){return t((()=>o.forEach((o=>r(o)&&o.remove()))))}function t(r){return{remove:()=>{r&&(r(),r=void 0)}}}function e(o){return t((()=>{const t=o();r(t)&&t.remove()}))}function n(o){return t(r(o)?()=>o.destroy():void 0)}function u(r,o){const e=setTimeout(r,o);return t((()=>clearTimeout(e)))}export{n as d,o as h,t as m,e as r,u as t};
