// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){const a=[];b.nextTick=function(c){a.push(c);1===a.length&&queueMicrotask(()=>{const d=a.slice();a.length=0;for(const e of d)e()})};Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});