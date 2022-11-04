// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/shaderModules/interfaces"],function(b,c){b.DiscardByCoverage=function(a,d){a=a.fragment;a.constants.add("coverageTestThreshold","float",.01);d.antialiasing?a.code.add(c.glsl`#define discardByCoverage(radius, coverage) { if (coverage < coverageTestThreshold) discard; }`):a.code.add(c.glsl`#define discardByCoverage(radius, coverage) { float coverageLimit = radius <= 0.5 ? coverageTestThreshold : 0.75; if (coverage < coverageLimit) discard; }`)};Object.defineProperties(b,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});