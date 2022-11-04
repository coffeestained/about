// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../core/maybe"],function(c,f){c.extractSafeScaleBounds=function(a){var b,d;const e=a.effectiveScaleRange;a=null!=(b=null==e?void 0:e.minScale)?b:0;b=null!=(d=null==e?void 0:e.maxScale)?d:0;return{minScale:a,maxScale:b}};c.highlightsSupported=function(a){return a&&"function"===typeof a.highlight};c.isScaleRangeActive=function(a,b){return 0<a||0<b};c.occludeesSupported=function(a){return a&&"function"===typeof a.maskOccludee};c.scaleBoundsPredicate=function(a,b,d){return f.isNone(a)||
a>d&&(0===b||a<b)};Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});