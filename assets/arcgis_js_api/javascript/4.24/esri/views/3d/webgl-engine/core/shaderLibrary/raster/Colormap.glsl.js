// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../shaderModules/FloatPassUniform","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform"],function(c,b,e,f){c.Colormap=function(d){d.fragment.uniforms.add([new f.Texture2DPassUniform("u_colormap",a=>a.u_colormap),new b.FloatPassUniform("u_colormapOffset",a=>a.colormap.u_colormapOffset),new b.FloatPassUniform("u_colormapMaxIndex",a=>a.colormap.u_colormapMaxIndex),new b.FloatPassUniform("u_opacity",a=>a.common.u_opacity)]);d.fragment.code.add(e.glsl`vec4 colormap(vec4 currentPixel, bool isFloat) {
float clrIndex = isFloat ? currentPixel.r - u_colormapOffset : currentPixel.r * 255.0 - u_colormapOffset;
vec4 result;
if (currentPixel.a == 0.0 || clrIndex > u_colormapMaxIndex) {
result = vec4(0.0, 0.0, 0.0, 0.0);
} else {
vec2 clrPosition = vec2((clrIndex + 0.5) / (u_colormapMaxIndex + 1.0), 0.0);
result = texture2D(u_colormap, clrPosition);
}
return result;
}`)};Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});