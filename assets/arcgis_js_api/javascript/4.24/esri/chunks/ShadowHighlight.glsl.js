// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../core/maybe ./mat4 ./mat4f64 ./vec2 ./vec2f64 ./vec3 ./vec3f64 ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/ShadowMap".split(" "),
function(h,w,k,f,x,l,m,y,z,A,B,C,D,E,n,F,G,g,p,H,I,e,q){function r(){const d=new I.ShaderBuilder;d.include(C.ReadShadowMapDraw,{receiveShadows:!0});const c=d.fragment;c.include(E.RgbaFloatEncoding);c.include(B.ReadLinearDepth);d.include(D.CameraSpace);d.include(z.ScreenSpacePass);c.uniforms.add([new e.Texture2DPassUniform("defaultDepthTex",(b,a)=>a.shadowMap.getSnapshot(q.SnapshotSlot.Default)),new e.Texture2DPassUniform("highlightDepthTex",(b,a)=>a.shadowMap.getSnapshot(q.SnapshotSlot.Highlight)),
new e.Texture2DPassUniform("depthMap",(b,a)=>a.linearDepthTexture),new e.Texture2DPassUniform("highlightMap",(b,a)=>a.highlightColorTexture),new G.Float4PassUniform("uColor",b=>b.shadowColor),new n.Float2PassUniform("nearFar",(b,a)=>a.camera.nearFar),new g.FloatPassUniform("opacity",b=>b.shadowOpacity),new g.FloatPassUniform("occludedOpacity",b=>b.occludedShadowOpacity),new g.FloatPassUniform("terminationFactor",b=>b.opacityElevation*b.dayNightTerminator),new F.Float3PassUniform("lightingMainDirectionView",
(b,a)=>m.normalize(t,m.transformMat4(t,a.lighting.lightingMainDirection,a.camera.viewInverseTransposeMatrix))),new n.Float2PassUniform("texelSize",(b,a)=>w.isSome(a.linearDepthTexture)?x.set(J,1/a.linearDepthTexture.descriptor.width,1/a.linearDepthTexture.descriptor.height):l.ZEROS),new H.Matrix4PassUniform("inverseViewMatrix",(b,a)=>k.invert(u,k.translate(u,a.camera.viewMatrix,a.camera.center)))]);c.constants.add("unoccludedHighlightFlag","vec4",A.unoccludedHighlightFlag).add("highlightedThreshold",
"float",v.highlightedThreshold).add("selfShadowThreshold","float",v.selfShadowThreshold);c.code.add(p.glsl`vec3 normalFromDepth(vec3 pixelPos, vec2 fragCoord, vec2 uv, vec2 texelSize, sampler2D depthMap, vec2 nearFar) {
float leftPixelDepth = linearDepthFromTexture(depthMap, uv + vec2(-1.0, 0.0) * texelSize, nearFar);
float rightPixelDepth = linearDepthFromTexture(depthMap, uv + vec2(1.0, 0.0) * texelSize, nearFar);
float bottomPixelDepth = linearDepthFromTexture(depthMap, uv + vec2(0.0, -1.0) * texelSize, nearFar);
float topPixelDepth = linearDepthFromTexture(depthMap, uv + vec2(0.0, 1.0) * texelSize, nearFar);
bool pickLeft = abs(pixelPos.z - leftPixelDepth) < abs(pixelPos.z - rightPixelDepth);
bool pickBottom = abs(pixelPos.z - bottomPixelDepth) < abs(pixelPos.z - topPixelDepth);
vec3 fragCoordHorizontal = pickLeft
? vec3(fragCoord + vec2(-1.0, 0.0), leftPixelDepth)
: vec3(fragCoord + vec2(1.0, 0.0), rightPixelDepth);
vec3 fragCoordVertical = pickBottom
? vec3(fragCoord + vec2(0.0, -1.0), bottomPixelDepth)
: vec3(fragCoord + vec2(0.0, 1.0), topPixelDepth);
vec3 verticalPixelPos = reconstructPosition(fragCoordHorizontal.xy, fragCoordHorizontal.z);
vec3 horizontalPixelPos = reconstructPosition(fragCoordVertical.xy, fragCoordVertical.z);
vec3 normal = normalize(cross(verticalPixelPos - pixelPos, horizontalPixelPos - pixelPos));
return pickLeft == pickBottom ? normal : -normal;
}`);c.code.add(p.glsl`void main(void) {
vec4 highlightInfo = texture2D(highlightMap, uv);
float visiblyHighlighted = (1.0 - clamp(distance(unoccludedHighlightFlag, highlightInfo), 0.0, 1.0)) * highlightInfo.a;
if (visiblyHighlighted > highlightedThreshold) {
discard;
}
float depth = rgba2float(texture2D(depthMap, uv));
if (depth == 0.0) {
discard;
}
float currentPixelDepth = linearDepthFromFloat(depth, nearFar);
if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
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
float depthHighlight = readShadowMapDepth(uvShadow, highlightDepthTex);
bool shadowHighlight = depthHighlight < lvpos.z;
if (!shadowHighlight) {
discard;
}
float depthDefault = readShadowMapDepth(uvShadow, defaultDepthTex);
bool shadowDefault = depthDefault < lvpos.z;
vec3 normal = normalFromDepth(currentPixelPos.xyz, gl_FragCoord.xy, uv, texelSize, depthMap, nearFar);
bool shaded = dot(normal, lightingMainDirectionView) < selfShadowThreshold;
float fragOpacity = (shadowDefault || shaded) ? occludedOpacity : opacity;
gl_FragColor = vec4(uColor.rgb, uColor.a * fragOpacity * terminationFactor);
}`);return d}const v={highlightedThreshold:.99999,selfShadowThreshold:.025},u=f.create(),t=y.create(),J=l.create();f=Object.freeze(Object.defineProperty({__proto__:null,build:r},Symbol.toStringTag,{value:"Module"}));h.ShadowHighlight=f;h.build=r});