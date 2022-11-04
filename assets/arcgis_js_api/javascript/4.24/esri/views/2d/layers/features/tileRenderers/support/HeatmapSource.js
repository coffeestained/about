// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../renderers/support/heatmapUtils"],function(a,c){let e=function(){function b(){this.gradient=null;this.width=this.height=512}b.prototype.render=function(d){c.drawHeatmap(d,512,this.intensities,this.gradient,this.minDensity,this.maxDensity)};return b}();a.HeatmapSource=e;Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});