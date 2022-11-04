// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){function c(a){return a instanceof Float32Array&&16<=a.length}function d(a){return Array.isArray(a)&&16<=a.length}b.isMat4=function(a){return c(a)||d(a)};b.isMat4f32=c;b.isMat4f64=d;Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});