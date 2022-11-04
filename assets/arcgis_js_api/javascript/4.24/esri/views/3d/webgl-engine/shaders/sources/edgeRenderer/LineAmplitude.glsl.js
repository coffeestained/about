// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/shaderModules/FloatUniform","../../../core/shaderModules/interfaces","./EdgeUtil.glsl","./UnpackAttributes.glsl"],function(e,g,c,a,h){e.LineAmplitude=function(f,d){const b=f.vertex;f.include(h.UnpackAttributes,d);a.usesSketchLogic(d)&&b.uniforms.add(new g.FloatUniform("strokesAmplitude"));switch(d.mode){case a.EdgeUtilMode.SOLID:b.code.add(c.glsl`float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
return 0.0;
}`);break;case a.EdgeUtilMode.SKETCH:b.code.add(c.glsl`float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
return strokesAmplitude;
}`);break;case a.EdgeUtilMode.MIXED:b.code.add(c.glsl`float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
float type = unpackedAttributes.type;
if (type <= 0.0) {
return strokesAmplitude;
}
else {
return 0.0;
}
}`)}};Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});