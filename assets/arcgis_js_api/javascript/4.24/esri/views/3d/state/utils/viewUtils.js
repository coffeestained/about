// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/mathUtils","../../../../chunks/vec3","../../../../chunks/vec3f64"],function(d,h,b,e){const f=e.create(),c=e.create();d.viewAngle=function(a,g,k){a.worldUpAtPosition(g,f);b.subtract(c,k,g);a=b.length(c);return 0===a?0:h.acosClamped(b.dot(c,f)/a)};Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});