// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(a){function b(c){return{setTimeout:(d,e)=>{const f=c.setTimeout(d,e);return{remove:()=>c.clearTimeout(f)}}}}const g=b(globalThis);a.clock=g;a.wrap=b;Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});