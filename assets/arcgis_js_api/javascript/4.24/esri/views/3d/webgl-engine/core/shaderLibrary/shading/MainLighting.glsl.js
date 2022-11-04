// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../shaderModules/Float3PassUniform","../../shaderModules/FloatPassUniform","../../shaderModules/interfaces"],function(c,d,f,g){c.MainLighting=function(a,h){a=a.fragment;h.isGround?a.uniforms.add(new f.FloatPassUniform("lightingFixedFactor",(e,b)=>(1-b.lighting.groundLightingFactor)*(1-b.lighting.globalFactor))):a.constants.add("lightingFixedFactor","float",0);a.uniforms.add([new d.Float3PassUniform("lightingMainDirection",(e,b)=>b.lighting.lightingMainDirection),new d.Float3PassUniform("lightingMainIntensity",
(e,b)=>b.lighting.mainLight.intensity)]);a.code.add(g.glsl`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)};Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});