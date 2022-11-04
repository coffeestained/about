// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/has ../../../../core/Logger ../snappingUtils ./SnappingHint".split(" "),function(d,h,e,k,f,l){k.getLogger("esri.views.interactive.snapping.hints.ParallelSnappingHint");e=function(g){function c(a,m,b){b=g.call(this,b)||this;b.lineStart=a;b.lineEnd=m;return b}h._inheritsLoose(c,g);c.prototype.equals=function(a){return a instanceof c?f.objectEqual(this.lineStart,a.lineStart)&&f.objectEqual(this.lineEnd,a.lineEnd):!1};return c}(l.SnappingHint);
d.ParallelSnappingHint=e;Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});