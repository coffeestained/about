// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../core/lang"],function(b,d){let e=function(){function a(c){this._geometry=c}a.prototype.next=function(){const c=this._geometry;this._geometry=null;return c};return a}();b.SimpleGeometryCursor=e;b.clone=function(a){return d.clone(a)};Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});