// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/vec3f64"],function(c,e){let d=function(a,b){this.vec3=a;this.id=b};c.LocalOrigin=d;c.fromValues=function(a,b,f,g){return new d(e.fromValues(a,b,f),g)};c.fromVector=function(a,b){return new d(e.clone(a),b)};Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});