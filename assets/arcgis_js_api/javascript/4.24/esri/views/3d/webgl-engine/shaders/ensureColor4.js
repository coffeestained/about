// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/maybe","../../../../chunks/vec4","../../../../chunks/vec4f64"],function(b,d,e,c){const f=c.create();b.ensureColor4=function(a){return d.isNone(a)?c.ZEROS:4===a.length?a:e.set(f,a[0],a[1],a[2],1)};Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});