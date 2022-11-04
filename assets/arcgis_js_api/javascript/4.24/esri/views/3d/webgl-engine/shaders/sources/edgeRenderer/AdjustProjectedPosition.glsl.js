// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/vec2f64 ../../../core/shaderLibrary/util/IsNaN.glsl ../../../core/shaderModules/Float2PassUniform ../../../core/shaderModules/interfaces ../../../core/shaderModules/Matrix3PassUniform ../../../core/shaderModules/Matrix4PassUniform ../../../core/shaderModules/Matrix4Uniform".split(" "),function(e,g,h,k,c,l,f,m){const n=g.fromValues(.5,-4E-4);e.AdjustProjectedPosition=function(a,p){a=a.vertex;a.include(h.IsNaN);a.constants.add("depthBias","vec2",n);a.uniforms.add(new k.Float2PassUniform("inverseViewport",
(b,d)=>d.inverseViewport));p.legacy?(a.uniforms.add(new m.Matrix4Uniform("localView")),a.uniforms.add(new f.Matrix4PassUniform("proj",(b,d)=>d.camera.projectionMatrix)),a.code.add(c.glsl`vec2 calculateProjectedBiasXY(vec4 projPos, vec3 globalNormal) {
float offsetXY = depthBias.x;
vec4 projNormal = proj * localView * vec4(globalNormal, 0.0);
return offsetXY * projPos.w * 2.0 * inverseViewport * normalize(projNormal.xyz).xy;
}`)):(a.uniforms.add(new l.Matrix3PassUniform("transformNormalViewFromGlobal",b=>b.transformNormalViewFromGlobal)),a.uniforms.add(new f.Matrix4PassUniform("transformProjFromView",b=>b.transformProjFromView)),a.code.add(c.glsl`vec2 calculateProjectedBiasXY(vec4 projPos, vec3 globalNormal) {
float offsetXY = depthBias.x;
vec4 projNormal = transformProjFromView * vec4(transformNormalViewFromGlobal * globalNormal, 0.0);
return offsetXY * projPos.w * 2.0 * inverseViewport * normalize(projNormal.xyz).xy;
}`));a.code.add(c.glsl`float _calculateProjectedBiasZ(vec4 projPos) {
float offsetZ = depthBias.y;
return sqrt(max(projPos.z,0.0)) * offsetZ;
}
vec4 adjustProjectedPosition(vec4 projPos, vec3 worldNormal, float lineWidth) {
vec2 offsetXY = calculateProjectedBiasXY(projPos, worldNormal);
if (!isNaN(offsetXY.x) && !isNaN(offsetXY.y)) {
projPos.xy += offsetXY;
}
projPos.z += _calculateProjectedBiasZ(projPos);
return projPos;
}`)};Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});