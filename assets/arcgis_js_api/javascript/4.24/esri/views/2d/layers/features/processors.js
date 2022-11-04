// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(e,f){const g=a=>Object.freeze(Object.defineProperty({__proto__:null,default:a},Symbol.toStringTag,{value:"Module"}));f.loadProcessorModule=function(a){return"heatmap"===a?new Promise((b,c)=>e(["./processors/HeatmapProcessor"],d=>b(g(d)),c)):new Promise((b,c)=>e(["./processors/SymbolProcessor"],d=>b(g(d)),c))};Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});