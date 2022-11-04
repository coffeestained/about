// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./maybe"],function(d,f){d.someSet=function(b,c){for(const a of b.entries())if(c(a[0]))return!0;return!1};d.union=function(b,c){const a=new Set;f.isSome(b)&&b.forEach(e=>a.add(e));f.isSome(c)&&c.forEach(e=>a.add(e));return a};Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});