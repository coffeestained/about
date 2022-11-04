// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(c){c.cache=function(a){const d=[];return function*(){yield*d;for(const b of a)d.push(b),yield b}};c.find=function(a,d){for(const b of a)if(null!=b&&d(b))return b};c.isIterable=function(a){return null!=a&&"function"===typeof a[Symbol.iterator]};Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});