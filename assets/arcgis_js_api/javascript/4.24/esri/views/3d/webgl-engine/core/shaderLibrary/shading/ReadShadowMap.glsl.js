// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../chunks/vec3f64 ../util/RgbaFloatEncoding.glsl ../../shaderModules/Float4PassUniform ../../shaderModules/FloatPassUniform ../../shaderModules/IntegerPassUniform ../../shaderModules/interfaces ../../shaderModules/Matrix4sUniform ../../shaderModules/Texture2DPassUniform ../../shaderTechnique/BindType".split(" "),function(d,l,m,n,p,q,r,f,g,t,h){function k(a){a=a.fragment;a.include(n.RgbaFloatEncoding);a.uniforms.add([new t.Texture2DPassUniform("shadowMapTex",
(c,b)=>b.shadowMap.depthTexture),new r.IntegerPassUniform("numCascades",(c,b)=>b.shadowMap.numCascades),new p.Float4PassUniform("cascadeDistances",(c,b)=>b.shadowMap.cascadeDistances),new q.FloatPassUniform("depthHalfPixelSz",(c,b)=>.5/b.shadowMap.textureSize)]);a.code.add(f.glsl`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, depthHalfPixelSz, shadowMapTex);
}`)}let u=function(a){function c(){var b=a.apply(this,arguments)||this;b.origin=m.create();return b}l._inheritsLoose(c,a);return c}(f.NoParameters);d.ReadShadowMapBindParameters=u;d.ReadShadowMapDraw=function(a,c){c.receiveShadows&&(a.fragment.uniforms.add(new g.Matrix4sUniform("shadowMapMatrix",h.BindType.Draw,(b,e)=>e.shadowMap.getShadowMapMatrices(b.origin),4)),k(a))};d.ReadShadowMapPass=function(a,c){c.receiveShadows&&(a.fragment.uniforms.add(new g.Matrix4sUniform("shadowMapMatrix",h.BindType.Pass,
(b,e)=>e.shadowMap.getShadowMapMatrices(b.origin),4)),k(a))};Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});