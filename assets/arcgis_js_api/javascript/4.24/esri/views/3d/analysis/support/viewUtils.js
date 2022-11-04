// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/screenUtils","../../../../chunks/vec2","../../../../chunks/vec3"],function(d,f,g,e){const h=f.createRenderScreenPointArray3(),k=f.createRenderScreenPointArray3();d.midpoint=function(c,a){e.set(a,0,0,0);if(0<c.length){for(let b=0;b<c.length;++b)e.add(a,a,c[b]);e.scale(a,a,1/c.length)}};d.screenSpaceTangent=function(c,a,b,l){l.projectToRenderScreen(c,h);l.projectToRenderScreen(a,k);g.subtract(b,k,h);g.normalize(b,b)};Object.defineProperties(d,{__esModule:{value:!0},
[Symbol.toStringTag]:{value:"Module"}})});