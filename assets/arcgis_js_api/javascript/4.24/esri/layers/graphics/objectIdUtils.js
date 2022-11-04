// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){b.findLastObjectIdFromFeatures=function(e,a){let c=0;for(const f of a){var d;a=null==(d=f.attributes)?void 0:d[e];"number"===typeof a&&isFinite(a)&&(c=Math.max(c,a))}return c};b.initialObjectId=1;Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});