// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./AlgorithmicColorRamp","./ColorRamp","./MultipartColorRamp"],function(b,d,c,e){c={key:"type",base:c,typeMap:{algorithmic:d,multipart:e}};b.fromJSON=function(a){return a&&a.type?"algorithmic"===a.type?d.fromJSON(a):"multipart"===a.type?e.fromJSON(a):null:null};b.types=c;Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});