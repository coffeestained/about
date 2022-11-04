// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../core/mathUtils ../core/maybe ./vec2 ./vec2f64 ../views/3d/webgl-engine/core/shaderLibrary/Laserline.glsl ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float3Uniform ../views/3d/webgl-engine/core/shaderModules/Float4Uniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/FloatUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder".split(" "),
function(k,p,t,u,l,v,w,g,e,m,x,q,c,y){function r(b){const f=new y.ShaderBuilder;f.extensions.add("GL_OES_standard_derivatives");f.include(w.ScreenSpacePass);f.include(v.Laserline,b);const a=f.fragment;b.heightManifoldEnabled&&a.uniforms.add(new m.Float4Uniform("heightPlane"));b.pointDistanceEnabled&&a.uniforms.add(new m.Float4Uniform("pointDistanceSphere"));b.lineVerticalPlaneEnabled&&(a.uniforms.add(new m.Float4Uniform("lineVerticalPlane")),a.uniforms.add(new e.Float3Uniform("lineVerticalStart")),
a.uniforms.add(new e.Float3Uniform("lineVerticalEnd")));(b.heightManifoldEnabled||b.pointDistanceEnabled||b.lineVerticalPlaneEnabled)&&a.uniforms.add(new q.FloatUniform("maxPixelDistance"));(b.lineVerticalPlaneEnabled||b.heightManifoldEnabled)&&a.code.add(c.glsl`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`);b.pointDistanceEnabled&&a.code.add(c.glsl`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`);b.intersectsLineEnabled&&(a.uniforms.add(new e.Float3Uniform("intersectsLineStart")),a.uniforms.add(new e.Float3Uniform("intersectsLineEnd")),a.uniforms.add(new e.Float3Uniform("intersectsLineDirection")),a.uniforms.add(new q.FloatUniform("intersectsLineRadius")),a.uniforms.add(new x.FloatPassUniform("perScreenPixelRatio",(d,z)=>z.camera.perScreenPixelRatio)),a.code.add(c.glsl`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`));(b.lineVerticalPlaneEnabled||b.intersectsLineEnabled)&&a.code.add(c.glsl`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`);a.code.add(c.glsl`void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
vec4 color = vec4(0, 0, 0, 0);`);b.heightManifoldEnabled&&(a.uniforms.add(new g.Float2PassUniform("angleCutoff",d=>h(d))),a.code.add(c.glsl`{
float heightManifoldAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, heightPlane.xyz)));
vec4 heightManifoldColor = laserlineProfile(planeDistancePixels(heightPlane, pos));
color = max(color, heightManifoldColor * heightManifoldAlpha);
}`));b.pointDistanceEnabled&&(a.uniforms.add(new g.Float2PassUniform("angleCutoff",d=>h(d))),a.code.add(c.glsl`{
float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);
}`));b.lineVerticalPlaneEnabled&&(a.uniforms.add(new g.Float2PassUniform("angleCutoff",d=>h(d))),a.code.add(c.glsl`{
if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}
}`));b.intersectsLineEnabled&&(a.uniforms.add(new g.Float2PassUniform("angleCutoff",d=>h(d))),a.code.add(c.glsl`{
if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}
}`));a.code.add(c.glsl`gl_FragColor = laserlineOutput(color * depthDiscontinuityAlpha);
}`);return f}function h(b){b=t.isSome(b.angleCutoff)?b.angleCutoff:n;return u.set(A,Math.cos(b),Math.cos(Math.max(0,b-p.deg2rad(2))))}const n=p.deg2rad(6),A=l.create();l=Object.freeze(Object.defineProperty({__proto__:null,defaultAngleCutoff:n,build:r},Symbol.toStringTag,{value:"Module"}));k.LaserlinesShader=l;k.build=r;k.defaultAngleCutoff=n});