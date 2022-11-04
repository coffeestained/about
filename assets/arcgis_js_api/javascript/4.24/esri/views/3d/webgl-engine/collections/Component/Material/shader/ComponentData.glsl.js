// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../../core/compilerUtils ../../../../../../../core/floatRGBA ./DecodeSymbolColor.glsl ../../../../core/shaderLibrary/util/RgbaFloatEncoding.glsl ../../../../core/shaderModules/Float2Uniform ../../../../core/shaderModules/Float4DrawUniform ../../../../core/shaderModules/IntegerDrawUniform ../../../../core/shaderModules/interfaces ../../../../core/shaderModules/Texture2DUniform ../../../../lib/VertexAttribute".split(" "),function(b,h,k,l,m,n,p,q,f,r,t){function u(a){const {vertex:c,
fragment:d}=a;c.uniforms.add(new p.Float4DrawUniform("externalColor",e=>e.componentParameters.externalColor));d.uniforms.add(new q.IntegerDrawUniform("externalColorMixMode",e=>e.componentParameters.externalColorMixMode));a.varyings.add("vExternalColor","vec4");c.code.add(f.glsl`float readElevationOffset() {
return 0.0;
}
vec4 forwardExternalColor(out bool castShadows) {
vExternalColor = externalColor;
castShadows = true;
return externalColor;
}`);d.code.add(f.glsl`void readExternalColor(out vec4 color, out int colorMixMode) {
color = vExternalColor;
colorMixMode = externalColorMixMode;
}`)}b.ComponentDataType=void 0;(function(a){a[a.Uniform=0]="Uniform";a[a.Varying=1]="Varying";a[a.COUNT=2]="COUNT"})(b.ComponentDataType||(b.ComponentDataType={}));const g=2**32/1E4;b.ComponentData=function(a,c){switch(c.componentData){case b.ComponentDataType.Varying:{const {vertex:d,fragment:e}=a;d.include(m.RgbaFloatEncoding);d.uniforms.add([new r.Texture2DUniform("componentColorTex"),new n.Float2Uniform("componentColorTexInvDim")]);a.attributes.add(t.VertexAttribute.COMPONENTINDEX,"float");a.varyings.add("vExternalColorMixMode",
"mediump float");a.varyings.add("vExternalColor","vec4");a.include(l.DecodeSymbolColor);d.constants.add("elevationScale","float",2*g);d.code.add(f.glsl`vec4 _readComponentColor() {
float normalizedIndex = (componentIndex * 2.0 + 0.5) * componentColorTexInvDim.x;
vec2 indexCoord = vec2(
mod(normalizedIndex, 1.0),
(floor(normalizedIndex) + 0.5) * componentColorTexInvDim.y
);
return texture2D(componentColorTex, indexCoord);
}
float readElevationOffset() {
float normalizedIndex = (componentIndex * 2.0 + 1.5) * componentColorTexInvDim.x;
vec2 indexCoord = vec2(
mod(normalizedIndex, 1.0),
(floor(normalizedIndex) + 0.5) * componentColorTexInvDim.y
);
return (rgba2float(texture2D(componentColorTex, indexCoord)) - 0.5) * elevationScale;
}
vec4 forwardExternalColor(out bool castShadows) {
vec4 componentColor = _readComponentColor() * 255.0;
float shadowFlag = mod(componentColor.b * 255.0, 2.0);
componentColor.b -= shadowFlag;
castShadows = shadowFlag >= 1.0;
int decodedColorMixMode;
vExternalColor = decodeSymbolColor(componentColor, decodedColorMixMode) * 0.003921568627451;
vExternalColorMixMode = float(decodedColorMixMode) + 0.5;
return vExternalColor;
}`);e.code.add(f.glsl`void readExternalColor(out vec4 externalColor, out int externalColorMixMode) {
externalColor = vExternalColor;
externalColorMixMode = int(vExternalColorMixMode);
}`)}break;case b.ComponentDataType.Uniform:return u(a);case b.ComponentDataType.COUNT:break;default:h.neverReached(c.componentData)}};b.MAX_ELEVATION_OFFSET=g;b.encodeElevationOffset=function(a,c){k.packFloatRGBA(a/g*.5+.5,c)};Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});