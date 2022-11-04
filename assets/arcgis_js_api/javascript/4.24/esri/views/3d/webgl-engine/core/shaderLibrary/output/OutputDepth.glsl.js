// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../ShaderOutputOptions","../util/RgbaFloatEncoding.glsl","../../shaderModules/interfaces"],function(b,c,f,d){b.OutputDepth=function(a,e){a.fragment.include(f.RgbaFloatEncoding);e.output===c.ShaderOutput.Shadow?(a.extensions.add("GL_OES_standard_derivatives"),a.fragment.code.add(d.glsl`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):e.output===c.ShaderOutput.Depth&&a.fragment.code.add(d.glsl`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)};Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});