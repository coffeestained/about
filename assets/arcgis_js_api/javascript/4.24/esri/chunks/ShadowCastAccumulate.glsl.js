// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ./_rollupPluginBabelHelpers ./mat4 ./mat4f64 ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform".split(" "),
function(c,n,g,e,p,q,h,r,t,u,v,w,x,y){function k(){const a=new x.ShaderBuilder,b=a.fragment;b.include(t.RgbaFloatEncoding);b.include(q.ReadLinearDepth);a.include(r.CameraSpace);a.include(p.ScreenSpacePass);a.include(h.ReadShadowMapPass,{receiveShadows:!0});b.uniforms.add([new y.Texture2DPassUniform("depthMap",f=>f.linearDepthTexture),new w.Matrix4PassUniform("inverseViewMatrix",(f,d)=>g.invert(l,g.translate(l,d.camera.viewMatrix,d.camera.center))),new u.Float2PassUniform("nearFar",(f,d)=>d.camera.nearFar)]);
b.constants.add("sampleValue","float",z);b.code.add(v.glsl`void main(void) {
float depth = rgba2float(texture2D(depthMap, uv));
if (depth == 0.0) {
discard;
}
float currentPixelDepth = linearDepthFromFloat(depth, nearFar);
if (-currentPixelDepth > nearFar.y || -currentPixelDepth < nearFar.x) {
discard;
}
vec4 currentPixelPos = vec4(reconstructPosition(gl_FragCoord.xy, currentPixelDepth), 1.0);
vec4 worldSpacePos = inverseViewMatrix * currentPixelPos;
mat4 shadowMatrix;
float linearDepth = -currentPixelDepth;
int i = chooseCascade(linearDepth, shadowMatrix);
if (i >= numCascades) {
discard;
}
vec3 lvpos = lightSpacePosition(worldSpacePos.xyz, shadowMatrix);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
discard;
}
vec2 uvShadow = cascadeCoordinates(i, lvpos);
float depthShadow = readShadowMapDepth(uvShadow, shadowMapTex);
bool shadow = depthShadow < lvpos.z;
if (!shadow) {
discard;
}
gl_FragColor = vec4(sampleValue);
}`);return a}let m=function(a){function b(){return a.apply(this,arguments)||this}n._inheritsLoose(b,a);return b}(h.ReadShadowMapBindParameters);const z=1/255,l=e.create();e=Object.freeze(Object.defineProperty({__proto__:null,ShadowCastAccumulatePassParameters:m,shadowCastMaxSamples:255,build:k},Symbol.toStringTag,{value:"Module"}));c.ShadowCastAccumulate=e;c.ShadowCastAccumulatePassParameters=m;c.build=k;c.shadowCastMaxSamples=255});