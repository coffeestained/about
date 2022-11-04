// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../core/shaderLibrary/util/RgbaFloatEncoding.glsl ../../../core/shaderModules/Float2Uniform ../../../core/shaderModules/FloatUniform ../../../core/shaderModules/interfaces ../../../core/shaderModules/Texture2DUniform ./EdgeUtil.glsl ./UnpackAttributes.glsl".split(" "),function(h,k,l,f,a,m,e,n){h.LineOffset=function(c,g){const b=c.vertex;c.include(n.UnpackAttributes,g);const d=c.fragment;e.usesSketchLogic(g)&&(b.uniforms.add(new l.Float2Uniform("strokesTextureScale")),b.uniforms.add(new f.FloatUniform("strokesLog2Resolution")),
b.uniforms.add(new f.FloatUniform("strokeVariants")),c.varyings.add("vStrokeUV","vec2"),d.uniforms.add(new m.Texture2DUniform("strokesTexture")),d.uniforms.add(new f.FloatUniform("strokesNormalizationScale")),b.code.add(a.glsl`void calculateStyleOutputsSketch(float lineLength, UnpackedAttributes unpackedAttributes) {
vec2 sidenessNorm = unpackedAttributes.sidenessNorm;
float lineIndex = clamp(ceil(log2(lineLength)), 0.0, strokesLog2Resolution);
vStrokeUV = vec2(exp2(lineIndex) * sidenessNorm.y, lineIndex * strokeVariants + variantStroke + 0.5) * strokesTextureScale;
vStrokeUV.x += variantOffset;
}`),c.fragment.include(k.RgbaFloatEncoding),d.code.add(a.glsl`float calculateLineOffsetSketch() {
float offsetNorm = rgba2float(texture2D(strokesTexture, vStrokeUV));
return (offsetNorm - 0.5) * strokesNormalizationScale;
}
float calculateLinePressureSketch() {
return rgba2float(texture2D(strokesTexture, vStrokeUV + vec2(0.0, 0.5)));
}`));switch(g.mode){case e.EdgeUtilMode.SOLID:b.code.add(a.glsl`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes) {}`);d.code.add(a.glsl`float calculateLineOffset() {
return 0.0;
}
float calculateLinePressure() {
return 1.0;
}`);break;case e.EdgeUtilMode.SKETCH:b.code.add(a.glsl`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes)
{
calculateStyleOutputsSketch(vLineLengthPixels, unpackedAttributes);
}`);d.code.add(a.glsl`float calculateLineOffset() {
return calculateLineOffsetSketch();
}
float calculateLinePressure() {
return calculateLinePressureSketch();
}`);break;case e.EdgeUtilMode.MIXED:c.varyings.add("vType","float"),b.code.add(a.glsl`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes)
{
vType = unpackedAttributes.type;
if (unpackedAttributes.type <= 0.0) {
calculateStyleOutputsSketch(vLineLengthPixels, unpackedAttributes);
}
}`),d.code.add(a.glsl`float calculateLineOffset() {
if (vType <= 0.0) {
return calculateLineOffsetSketch();
}
else {
return 0.0;
}
}
float calculateLinePressure() {
if (vType <= 0.0) {
return calculateLinePressureSketch();
}
else {
return 1.0;
}
}`)}};Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});