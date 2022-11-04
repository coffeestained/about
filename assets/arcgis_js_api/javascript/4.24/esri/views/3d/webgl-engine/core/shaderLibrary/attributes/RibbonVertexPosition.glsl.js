// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../shaderModules/Float3PassUniform ../../shaderModules/Float4sPassUniform ../../shaderModules/FloatPassUniform ../../shaderModules/FloatsPassUniform ../../shaderModules/interfaces ../../../lib/VertexAttribute ../../../materials/VisualVariablePassParameters".split(" "),function(l,f,m,n,g,c,e,h){l.RibbonVertexPosition=function(d,k){const b=d.vertex;b.uniforms.add(new n.FloatPassUniform("intrinsicWidth",a=>a.width));k.vvSize?(d.attributes.add(e.VertexAttribute.SIZEFEATUREATTRIBUTE,
"float"),b.uniforms.add(new f.Float3PassUniform("vvSizeMinSize",a=>a.vvSizeMinSize)),b.uniforms.add(new f.Float3PassUniform("vvSizeMaxSize",a=>a.vvSizeMaxSize)),b.uniforms.add(new f.Float3PassUniform("vvSizeOffset",a=>a.vvSizeOffset)),b.uniforms.add(new f.Float3PassUniform("vvSizeFactor",a=>a.vvSizeFactor)),b.code.add(c.glsl`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(d.attributes.add(e.VertexAttribute.SIZE,"float"),b.code.add(c.glsl`float getSize(){
return intrinsicWidth * size;
}`));k.vvOpacity?(d.attributes.add(e.VertexAttribute.OPACITYFEATUREATTRIBUTE,"float"),b.constants.add("vvOpacityNumber","int",8),b.uniforms.add([new g.FloatsPassUniform("vvOpacityValues",a=>a.vvOpacityValues,8),new g.FloatsPassUniform("vvOpacityOpacities",a=>a.vvOpacityOpacities,8)]),b.code.add(c.glsl`float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):b.code.add(c.glsl`vec4 applyOpacity( vec4 color ){
return color;
}`);k.vvColor?(d.attributes.add(e.VertexAttribute.COLORFEATUREATTRIBUTE,"float"),b.constants.add("vvColorNumber","int",h.vvColorNumber),b.uniforms.add(new g.FloatsPassUniform("vvColorValues",a=>a.vvColorValues,h.vvColorNumber)),b.uniforms.add(new m.Float4sPassUniform("vvColorColors",a=>a.vvColorColors,h.vvColorNumber)),b.code.add(c.glsl`vec4 interpolateColor( float value ) {
if (value <= vvColorValues[0]) {
return vvColorColors[0];
}
for (int i = 1; i < vvColorNumber; ++i) {
if (vvColorValues[i] >= value) {
float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
return mix(vvColorColors[i-1], vvColorColors[i], f);
}
}
return vvColorColors[vvColorNumber - 1];
}
vec4 getColor(){
return applyOpacity(interpolateColor(colorFeatureAttribute));
}`)):(d.attributes.add(e.VertexAttribute.COLOR,"vec4"),b.code.add(c.glsl`vec4 getColor(){
return applyOpacity(color);
}`))};Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});