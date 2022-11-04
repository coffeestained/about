/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{i as e,a as t,j as i,k as n}from"./maybe.js";import{h as s,s as r,d as a,g as l,a as o,w as c,v as h,n as d,k as p,b as f,K as u,q as _}from"./mathUtils.js";import{c as g,e as m,g as b,h as P}from"./lineSegment.js";import{V as v}from"./VisualElement.js";import{c as V}from"./vec4f64.js";import{b as E,d as D,e as L,g as x,h as w}from"./frustum.js";import{c as y,f as S}from"./plane.js";import{w as C}from"./ray.js";import{c as A}from"./sphere.js";import{g as R}from"./glUtil.js";import{n as M}from"./InterleavedLayout.js";import{V as T}from"./VertexAttribute.js";import{z as q,b as U,h as j,p as O,j as I,S as z,M as N,R as B,c as F,P as H,E as W}from"./glUtil3D.js";import{e as G}from"./mat4.js";import{c as k}from"./mat4f64.js";import{a as X}from"./vec2.js";import{a as K}from"./vec2f64.js";import{C as J,T as Q,S as Y,e as Z,F as $}from"./CameraSpace.glsl.js";import{g as ee,D as te,d as ie,u as ne}from"./Material.js";import{B as se,P as re,U as ae}from"./enums.js";import{m as le,i as oe,d as ce}from"./OrderIndependentTransparency.js";import{V as he,B as de}from"./VertexArrayObject.js";import{R as pe}from"./RenderSlot.js";import{_ as fe}from"./tslib.es6.js";import{p as ue,S as _e}from"./ShaderTechniqueConfiguration.js";import{F as ge}from"./Float3Uniform.js";function me(t,i){t.extensions.add("GL_OES_standard_derivatives");const n=t.fragment;n.include(q),t.include(J),n.uniforms.add([new U("globalAlpha",(e=>e.globalAlpha)),new j("glowColor",(e=>e.glowColor)),new U("glowWidth",((e,t)=>e.glowWidth*t.camera.pixelRatio)),new U("glowFalloff",(e=>e.glowFalloff)),new j("innerColor",(e=>e.innerColor)),new U("innerWidth",((e,t)=>e.innerWidth*t.camera.pixelRatio)),new O("depthMap",((e,t)=>t.linearDepthTexture)),new I("nearFar",((e,t)=>t.camera.nearFar)),new Q("frameColor")]),n.code.add(ee`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`),n.code.add(ee`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),n.code.add(ee`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),n.code.add(ee`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float depthDiscontinuityAlpha) {
float depth = linearDepthFromTexture(depthMap, uv, nearFar);
if (-depth == nearFar[0]) {
return false;
}
pos = reconstructPosition(gl_FragCoord.xy, depth);
normal = normalize(cross(dFdx(pos), dFdy(pos)));
float ddepth = fwidth(depth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / depth);
return true;
}`),i.contrastControlEnabled?(n.uniforms.add(new U("globalAlphaContrastBoost",(t=>e(t.globalAlphaContrastBoost)?t.globalAlphaContrastBoost:1))),n.code.add(ee`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture2D(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`)):n.code.add(ee`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}const be=K(),Pe=k(),ve=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const t=new z;t.include(me,e);const{vertex:i,fragment:n}=t;return i.uniforms.add([new N("modelView",((e,t)=>G(Pe,t.camera.viewMatrix,e.origin))),new N("proj",((e,t)=>t.camera.projectionMatrix)),new U("glowWidth",((e,t)=>e.glowWidth*t.camera.pixelRatio)),new I("pixelToNDC",((e,t)=>X(be,2/t.camera.fullViewport[2],2/t.camera.fullViewport[3])))]),t.attributes.add(T.START,"vec3"),t.attributes.add(T.END,"vec3"),t.attributes.add(T.UP,"vec3"),t.attributes.add(T.EXTRUDE,"vec2"),t.varyings.add("uv","vec2"),t.varyings.add("vViewStart","vec3"),t.varyings.add("vViewEnd","vec3"),t.varyings.add("vViewPlane","vec4"),i.code.add(ee`void main() {
vec3 pos = mix(start, end, extrude.x);
vec4 viewPos = modelView * vec4(pos, 1);
vec4 projPos = proj * viewPos;
vec2 ndcPos = projPos.xy / projPos.w;
vec3 viewUp = (modelView * vec4(extrude.y * up, 0)).xyz;
vec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);
vec2 projExtrudeDir = normalize(projPosUp.xy / projPosUp.w - ndcPos);
vec2 lxy = abs(sign(projExtrudeDir) - ndcPos);
ndcPos += length(lxy) * projExtrudeDir;
vec3 worldPlaneNormal = normalize(cross(up, normalize(end - start)));
vec3 viewPlaneNormal = (modelView * vec4(worldPlaneNormal, 0)).xyz;
vViewStart = (modelView * vec4(start, 1)).xyz;
vViewEnd = (modelView * vec4(end, 1)).xyz;
vViewPlane = vec4(viewPlaneNormal, -dot(viewPlaneNormal, vViewStart));
float xPaddingPixels = sign(dot(viewPlaneNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
ndcPos.x += xPaddingPixels * pixelToNDC.x;
uv = ndcPos * 0.5 + 0.5;
gl_Position = vec4(ndcPos, 0, 1);
}`),n.uniforms.add(new U("perScreenPixelRatio",((e,t)=>t.camera.perScreenPixelRatio))),n.code.add(ee`float planeDistancePixels(vec4 plane, vec3 pos, vec3 start, vec3 end) {
vec3 origin = mix(start, end, 0.5);
vec3 basis = end - origin;
vec3 posAtOrigin = pos - origin;
float x = dot(normalize(basis), posAtOrigin);
float y = dot(plane.xyz, posAtOrigin);
float dx = max(abs(x) - length(basis), 0.0);
float dy = y;
float dist = length(vec2(dx, dy));
float width = fwidth(y);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}
void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
float distance = planeDistancePixels(vViewPlane, pos, vViewStart, vViewEnd);
vec4 color = laserlineProfile(distance);
float alpha = 1.0 - smoothstep(0.995, 0.999, abs(dot(normal, vViewPlane.xyz)));
gl_FragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);
}`),t}},Symbol.toStringTag,{value:"Module"}));class Ve extends F{initializeProgram(e){const t=Ve.shader.get().build(this.configuration);return new H(e.rctx,t,Ve.attributeLocations)}initializePipeline(){return le({blending:oe(se.ONE,se.ONE_MINUS_SRC_ALPHA),colorWrite:ce})}}Ve.shader=new B(ve,(()=>Promise.resolve().then((()=>ve)))),Ve.attributeLocations=new Map([[T.START,0],[T.END,1],[T.UP,2],[T.EXTRUDE,3]]);class Ee{constructor(e){this._renderCoordsHelper=e,this._buffers=null,this._origin=s(),this._dirty=!1,this._count=0,this._vao=null}set vertices(e){const t=new Float64Array(3*e.length);let i=0;for(const n of e)t[i++]=n[0],t[i++]=n[1],t[i++]=n[2];this.buffers=[t]}set buffers(e){if(this._buffers=e,this._buffers.length>0){const e=this._buffers[0],t=3*Math.floor(e.length/3/2);r(this._origin,e[t+0],e[t+1],e[t+2])}else r(this._origin,0,0,0);this._dirty=!0}get origin(){return this._origin}draw(t){const i=this._ensureVAO(t);e(i)&&(t.bindVAO(i),t.drawArrays(re.TRIANGLES,0,this._count))}dispose(){e(this._vao)&&this._vao.dispose()}_ensureVAO(e){return t(this._buffers)?null:(t(this._vao)&&(this._vao=this._createVAO(e,this._buffers)),this._ensureVertexData(this._vao,this._buffers),this._vao)}_createVAO(e,t){const i=this._createDataBuffer(t);return this._dirty=!1,new he(e,Ve.attributeLocations,{data:R(xe)},{data:de.createVertex(e,ae.STATIC_DRAW,i)})}_ensureVertexData(e,t){if(!this._dirty)return;const i=this._createDataBuffer(t);e.vertexBuffers.data.setData(i),this._dirty=!1}_numberOfRenderVertices(e){return 2*(e.length/3-1)*3}_createDataBuffer(e){const t=e.reduce(((e,t)=>e+this._numberOfRenderVertices(t)),0);this._count=t;const i=xe.createBuffer(t),n=this._origin;let s=0,l=0;for(const t of e){for(let e=0;e<t.length;e+=3){const o=r(Le,t[e+0],t[e+1],t[e+2]);0===e?l=this._renderCoordsHelper.getAltitude(o):this._renderCoordsHelper.setAltitude(o,l);const c=this._renderCoordsHelper.worldUpAtPosition(o,De),h=s+2*e,d=a(Le,o,n);if(e<t.length-3){i.up.setVec(h,c),i.up.setVec(h+3,c),i.up.setVec(h+5,c);for(let e=0;e<6;e++)i.start.setVec(h+e,d);i.extrude.setValues(h+0,0,-1),i.extrude.setValues(h+1,1,-1),i.extrude.setValues(h+2,1,1),i.extrude.setValues(h+3,0,-1),i.extrude.setValues(h+4,1,1),i.extrude.setValues(h+5,0,1)}if(e>0){i.up.setVec(h-2,c),i.up.setVec(h-4,c),i.up.setVec(h-5,c);for(let e=-6;e<0;e++)i.end.setVec(h+e,d)}}s+=this._numberOfRenderVertices(t)}return i.buffer}}const De=s(),Le=s(),xe=M().vec3f(T.START).vec3f(T.END).vec3f(T.UP).vec2f(T.EXTRUDE);class we extends _e{constructor(){super(...arguments),this.contrastControlEnabled=!1}}fe([ue()],we.prototype,"contrastControlEnabled",void 0);const ye=l(6);function Se(t){const i=e(t.angleCutoff)?t.angleCutoff:ye;return X(Ce,Math.cos(i),Math.cos(Math.max(0,i-l(2))))}const Ce=K(),Ae=Object.freeze(Object.defineProperty({__proto__:null,defaultAngleCutoff:ye,build:function(e){const t=new z;t.extensions.add("GL_OES_standard_derivatives"),t.include(Y),t.include(me,e);const i=t.fragment;return e.heightManifoldEnabled&&i.uniforms.add(new Z("heightPlane")),e.pointDistanceEnabled&&i.uniforms.add(new Z("pointDistanceSphere")),e.lineVerticalPlaneEnabled&&(i.uniforms.add(new Z("lineVerticalPlane")),i.uniforms.add(new ge("lineVerticalStart")),i.uniforms.add(new ge("lineVerticalEnd"))),(e.heightManifoldEnabled||e.pointDistanceEnabled||e.lineVerticalPlaneEnabled)&&i.uniforms.add(new $("maxPixelDistance")),(e.lineVerticalPlaneEnabled||e.heightManifoldEnabled)&&i.code.add(ee`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),e.pointDistanceEnabled&&i.code.add(ee`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),e.intersectsLineEnabled&&(i.uniforms.add(new ge("intersectsLineStart")),i.uniforms.add(new ge("intersectsLineEnd")),i.uniforms.add(new ge("intersectsLineDirection")),i.uniforms.add(new $("intersectsLineRadius")),i.uniforms.add(new U("perScreenPixelRatio",((e,t)=>t.camera.perScreenPixelRatio))),i.code.add(ee`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`)),(e.lineVerticalPlaneEnabled||e.intersectsLineEnabled)&&i.code.add(ee`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),i.code.add(ee`void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
vec4 color = vec4(0, 0, 0, 0);`),e.heightManifoldEnabled&&(i.uniforms.add(new I("angleCutoff",(e=>Se(e)))),i.code.add(ee`{
float heightManifoldAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, heightPlane.xyz)));
vec4 heightManifoldColor = laserlineProfile(planeDistancePixels(heightPlane, pos));
color = max(color, heightManifoldColor * heightManifoldAlpha);
}`)),e.pointDistanceEnabled&&(i.uniforms.add(new I("angleCutoff",(e=>Se(e)))),i.code.add(ee`{
float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);
}`)),e.lineVerticalPlaneEnabled&&(i.uniforms.add(new I("angleCutoff",(e=>Se(e)))),i.code.add(ee`{
if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}
}`)),e.intersectsLineEnabled&&(i.uniforms.add(new I("angleCutoff",(e=>Se(e)))),i.code.add(ee`{
if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}
}`)),i.code.add(ee`gl_FragColor = laserlineOutput(color * depthDiscontinuityAlpha);
}`),t}},Symbol.toStringTag,{value:"Module"}));class Re extends F{initializeProgram(e){const t=Re.shader.get().build(this.configuration);return new H(e.rctx,t,te)}initializePipeline(){return le({blending:oe(se.ONE,se.ONE_MINUS_SRC_ALPHA),colorWrite:ce})}}Re.shader=new B(Ae,(()=>Promise.resolve().then((()=>Ae))));class Me extends we{constructor(){super(...arguments),this.heightManifoldEnabled=!1,this.pointDistanceEnabled=!1,this.lineVerticalPlaneEnabled=!1,this.intersectsLineEnabled=!1}}fe([ue()],Me.prototype,"heightManifoldEnabled",void 0),fe([ue()],Me.prototype,"pointDistanceEnabled",void 0),fe([ue()],Me.prototype,"lineVerticalPlaneEnabled",void 0),fe([ue()],Me.prototype,"intersectsLineEnabled",void 0);const Te=s(),qe=V(),Ue={glowColor:[1,.5,0],glowWidth:8,glowFalloff:8,innerColor:[1,1,1],innerWidth:1,globalAlpha:.75,angleCutoff:l(6),globalAlphaContrastBoost:2,__tagStrict:"NoParameters"};function je(e,t,i,n){const s=Te,r=qe;c(s,t,n),o(r,i),r[3]=0,u(r,r,n),S(s,r,e)}class Oe{constructor(e,t={},i={contrastControlEnabled:!1}){this._renderCoordsHelper=e,this._config=i,this._technique=null,this._heightManifoldEnabled=!1,this._heightManifoldTarget=s(),this._pointDistanceEnabled=!1,this._pointDistanceOrigin=s(),this._pointDistanceTarget=s(),this._lineVerticalPlaneEnabled=!1,this._lineVerticalPlaneSegment=g(),this._intersectsLineEnabled=!1,this._intersectsLineSegment=g(),this._intersectsLineRadius=3,this._intersectsLineInfinite=!1,this._pathVerticalPlaneEnabled=!1,this._pathVerticalPlaneData=null,this._pathTechnique=null,this.canRender=!0,this._tempNormal=s(),this._tempDir=s(),this._tempUp=s(),this._tempVec3A=s(),this._tempVec3B=s(),this._tempVec4=V(),this._tempPlane=y(),this._tempSphere=A(),this._parameters=ie(t,Ue)}get renderSlots(){return[this._config.contrastControlEnabled?pe.LASERLINES_CONTRAST_CONTROL:pe.LASERLINES]}get needsLinearDepth(){return!0}get heightManifoldEnabled(){return this._heightManifoldEnabled}set heightManifoldEnabled(e){this._heightManifoldEnabled!==e&&(this._heightManifoldEnabled=e,this._requestRender())}get heightManifoldTarget(){return this._heightManifoldTarget}set heightManifoldTarget(e){o(this._heightManifoldTarget,e),this._requestRender()}get pointDistanceEnabled(){return this._pointDistanceEnabled}set pointDistanceEnabled(e){e!==this._pointDistanceEnabled&&(this._pointDistanceEnabled=e,this._requestRender())}get pointDistanceTarget(){return this._pointDistanceTarget}set pointDistanceTarget(e){o(this._pointDistanceTarget,e),this._requestRender()}get pointDistanceOrigin(){return this._pointDistanceOrigin}set pointDistanceOrigin(e){o(this._pointDistanceOrigin,e),this._requestRender()}get lineVerticalPlaneEnabled(){return this._lineVerticalPlaneEnabled}set lineVerticalPlaneEnabled(e){e!==this._lineVerticalPlaneEnabled&&(this._lineVerticalPlaneEnabled=e,this._requestRender())}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){m(e,this._lineVerticalPlaneSegment),this._requestRender()}get intersectsLineEnabled(){return this._intersectsLineEnabled}set intersectsLineEnabled(e){e!==this._intersectsLineEnabled&&(this._intersectsLineEnabled=e,this._requestRender())}get intersectsLineSegment(){return this._intersectsLineSegment}set intersectsLineSegment(e){m(e,this._intersectsLineSegment),this._requestRender()}get intersectsLineRadius(){return this._intersectsLineRadius}set intersectsLineRadius(e){e!==this._intersectsLineRadius&&(this._intersectsLineRadius=e,this._requestRender())}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){e!==this._intersectsLineInfinite&&(this._intersectsLineInfinite=e,this._requestRender())}get pathVerticalPlaneEnabled(){return this._pathVerticalPlaneEnabled}set pathVerticalPlaneEnabled(t){t!==this._pathVerticalPlaneEnabled&&(this._pathVerticalPlaneEnabled=t,e(this._pathVerticalPlaneData)&&this._requestRender())}set pathVerticalPlaneVertices(e){t(this._pathVerticalPlaneData)&&(this._pathVerticalPlaneData=new Ee(this._renderCoordsHelper)),this._pathVerticalPlaneData.vertices=e,this.pathVerticalPlaneEnabled&&this._requestRender()}set pathVerticalPlaneBuffers(e){t(this._pathVerticalPlaneData)&&(this._pathVerticalPlaneData=new Ee(this._renderCoordsHelper)),this._pathVerticalPlaneData.buffers=e,this.pathVerticalPlaneEnabled&&this._requestRender()}setParameters(e){ne(this._parameters,e)&&this._requestRender()}initializeRenderContext(e){this._context=e;const t=e.renderContext.rctx;this._quadVAO=W(t),this._techniqueRepository=e.shaderTechniqueRepository,this._techniqueConfig=new Me;const i=new we;i.contrastControlEnabled=this._config.contrastControlEnabled,this._pathTechnique=this._techniqueRepository.acquire(Ve,i)}uninitializeRenderContext(){this._quadVAO=i(this._quadVAO),this._technique=n(this._technique),this._pathVerticalPlaneData=i(this._pathVerticalPlaneData),this._pathTechnique=n(this._pathTechnique)}prepareTechnique(){return this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled?(this._techniqueConfig.heightManifoldEnabled=this.heightManifoldEnabled,this._techniqueConfig.lineVerticalPlaneEnabled=this.lineVerticalPlaneEnabled,this._techniqueConfig.pointDistanceEnabled=this.pointDistanceEnabled,this._techniqueConfig.intersectsLineEnabled=this.intersectsLineEnabled,this._techniqueConfig.contrastControlEnabled=this._config.contrastControlEnabled,this._technique=this._techniqueRepository.releaseAndAcquire(Re,this._techniqueConfig,this._technique),this._technique):this._pathTechnique}render(e,t){(this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled)&&this._renderUnified(e,t),this.pathVerticalPlaneEnabled&&this._renderPath(e)}_renderUnified(e,t){const i=e.rctx,n=i.bindTechnique(t,this._parameters,e.bindParameters);this._bindGlobalUniforms(e,n),this._bindHeightManifoldUniforms(e,n),this._bindPointDistanceUniforms(e,n),this._bindLineVerticalPlaneUniforms(e,n),this._bindIntersectsLineUniforms(e,n),i.bindVAO(this._quadVAO),i.drawArrays(re.TRIANGLE_STRIP,0,4)}_renderPath(e){if(t(this._pathVerticalPlaneData)||t(this._pathTechnique))return;const i=e.rctx,n=this._pathTechnique,s=i.bindTechnique(n,{...this._parameters,origin:this._pathVerticalPlaneData.origin},e.bindParameters);this._bindGlobalUniforms(e,s),this._pathVerticalPlaneData.draw(e.rctx)}_bindHeightManifoldUniforms(e,t){if(!this.heightManifoldEnabled)return;const i=this._tempVec3A,n=this._tempPlane,s=e.bindParameters.camera;this._renderCoordsHelper.worldUpAtPosition(this._heightManifoldTarget,i),je(n,this._heightManifoldTarget,i,s.viewMatrix),t.setUniform4fv("heightPlane",n)}_bindPointDistanceUniforms(e,t){if(!this._pointDistanceEnabled)return;const i=e.bindParameters.camera,n=this._tempSphere;o(n,this._pointDistanceOrigin),c(n,n,i.viewMatrix),n[3]=h(this._pointDistanceOrigin,this._pointDistanceTarget),t.setUniform4f("pointDistanceSphere",n[0],n[1],n[2],n[3])}_bindLineVerticalPlaneUniforms(e,t){if(!this._lineVerticalPlaneEnabled)return;const i=this._renderCoordsHelper,n=e.bindParameters.camera,s=this._tempPlane,r=this._tempVec3A,a=this._tempUp,l=this._tempDir,h=this._tempNormal;b(this._lineVerticalPlaneSegment,.5,r),i.worldUpAtPosition(r,a),d(l,this._lineVerticalPlaneSegment.vector),p(h,a,l),d(h,h),je(s,this._lineVerticalPlaneSegment.origin,h,n.viewMatrix),t.setUniform4fv("lineVerticalPlane",s);const u=this._tempVec3A;o(u,this._lineVerticalPlaneSegment.origin),i.setAltitude(u,0),c(u,u,n.viewMatrix),t.setUniform3fv("lineVerticalStart",u);const _=this._tempVec3B;f(_,this._lineVerticalPlaneSegment.origin,this._lineVerticalPlaneSegment.vector),i.setAltitude(_,0),c(_,_,n.viewMatrix),t.setUniform3fv("lineVerticalEnd",_)}_bindIntersectsLineUniforms(e,t){if(!this._intersectsLineEnabled)return;const i=ze,n=Ne,s=e.bindParameters.camera;if(this._intersectsLineInfinite){if(D(C(this._intersectsLineSegment.origin,this._intersectsLineSegment.vector),Ie),Ie.c0=-Number.MAX_VALUE,!L(s.frustum,Ie))return;x(Ie,i),w(Ie,n)}else o(i,this._intersectsLineSegment.origin),f(n,this._intersectsLineSegment.origin,this._intersectsLineSegment.vector);const r=this._tempVec3A;c(r,i,s.viewMatrix),t.setUniform3fv("intersectsLineStart",r);const a=this._tempVec4;o(a,this._intersectsLineSegment.vector),this._tempVec4[3]=0,u(this._tempVec4,this._tempVec4,s.viewMatrix),c(n,n,s.viewMatrix),t.setUniform3fv("intersectsLineEnd",n),d(a,a),t.setUniform3f("intersectsLineDirection",a[0],a[1],a[2]),t.setUniform1f("intersectsLineRadius",this._intersectsLineRadius)}_bindGlobalUniforms(e,t){const i=e.bindParameters.camera;this._heightManifoldEnabled?t.setUniform1f("maxPixelDistance",2*i.computeScreenPixelSizeAt(this._heightManifoldTarget)):this._pointDistanceEnabled?t.setUniform1f("maxPixelDistance",2*i.computeScreenPixelSizeAt(this._pointDistanceTarget)):this._lineVerticalPlaneEnabled&&t.setUniform1f("maxPixelDistance",2*i.computeScreenPixelSizeAt(this._lineVerticalPlaneSegment.origin)),t.bindTexture("frameColor",e.offscreenRenderingHelper.mainColorTexture)}_requestRender(){this._context&&this._context.requestRender()}}const Ie=E(),ze=s(),Ne=s();class Be extends v{constructor(e){super(e.view),this._angleCutoff=ye,this._style={},this._heightManifoldTarget=s(),this._heightManifoldEnabled=!1,this._intersectsLine=g(),this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._lineVerticalPlaneSegment=null,this._pathVerticalPlaneBuffers=null,this._pointDistanceLine=null,this.applyProps(e)}get testData(){return this.renderer}createResources(){this._ensureRenderer()}destroyResources(){this._disposeRenderer()}updateVisibility(){this._syncRenderer(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance()}get angleCutoff(){return this._angleCutoff}set angleCutoff(e){this._angleCutoff!==e&&(this._angleCutoff=e,this._syncAngleCutoff())}get style(){return this._style}set style(e){this._style=e,this._syncStyle()}get heightManifoldTarget(){return this._heightManifoldEnabled?this._heightManifoldTarget:null}set heightManifoldTarget(t){e(t)?(o(this._heightManifoldTarget,t),this._heightManifoldEnabled=!0):this._heightManifoldEnabled=!1,this._syncRenderer(),this._syncHeightManifold()}set intersectsWorldUpAtLocation(e){if(t(e))return void(this.intersectsLine=null);const i=this.view.renderCoordsHelper.worldUpAtPosition(e,Fe);this.intersectsLine=P(e,i),this.intersectsLineInfinite=!0}get intersectsLine(){return this._intersectsLineEnabled?this._intersectsLine:null}set intersectsLine(t){e(t)?(m(t,this._intersectsLine),this._intersectsLineEnabled=!0):this._intersectsLineEnabled=!1,this._syncIntersectsLine(),this._syncRenderer()}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){this._intersectsLineInfinite=e,this._syncIntersectsLineInfinite()}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(t){this._lineVerticalPlaneSegment=e(t)?m(t):null,this._syncLineVerticalPlane(),this._syncRenderer()}get pathVerticalPlane(){return this._pathVerticalPlaneBuffers}set pathVerticalPlane(e){this._pathVerticalPlaneBuffers=e,this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncRenderer()}get pointDistanceLine(){return this._pointDistanceLine}set pointDistanceLine(t){this._pointDistanceLine=e(t)?{origin:_(t.origin),target:_(t.target)}:null,this._syncPointDistance(),this._syncRenderer()}_syncRenderer(){this.attached&&this.visible&&(this._intersectsLineEnabled||this._heightManifoldEnabled||e(this._pointDistanceLine)||e(this._pathVerticalPlaneBuffers))?this._ensureRenderer():this._disposeRenderer()}_ensureRenderer(){e(this.renderer)||(this.renderer=new Oe(this.view.renderCoordsHelper,void 0,{contrastControlEnabled:!0}),this._syncStyle(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncIntersectsLineInfinite(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncAngleCutoff(),this.view._stage&&this.view._stage.addRenderPlugin(this.renderer.renderSlots,this.renderer))}_syncStyle(){t(this.renderer)||(this.renderer.setParameters(this._style),null!=this._style.intersectsLineRadius&&(this.renderer.intersectsLineRadius=this._style.intersectsLineRadius))}_syncAngleCutoff(){t(this.renderer)||this.renderer.setParameters({angleCutoff:this._angleCutoff})}_syncHeightManifold(){t(this.renderer)||(this.renderer.heightManifoldEnabled=this._heightManifoldEnabled&&this.visible,this._heightManifoldEnabled&&(this.renderer.heightManifoldTarget=this._heightManifoldTarget))}_syncIntersectsLine(){t(this.renderer)||(this.renderer.intersectsLineEnabled=this._intersectsLineEnabled&&this.visible,this._intersectsLineEnabled&&(this.renderer.intersectsLineSegment=this._intersectsLine))}_syncIntersectsLineInfinite(){t(this.renderer)||(this.renderer.intersectsLineInfinite=this._intersectsLineInfinite)}_syncPathVerticalPlane(){t(this.renderer)||(this.renderer.pathVerticalPlaneEnabled=e(this._pathVerticalPlaneBuffers)&&this.visible,e(this._pathVerticalPlaneBuffers)&&(this.renderer.pathVerticalPlaneBuffers=this._pathVerticalPlaneBuffers))}_syncLineVerticalPlane(){t(this.renderer)||(this.renderer.lineVerticalPlaneEnabled=e(this._lineVerticalPlaneSegment)&&this.visible,e(this._lineVerticalPlaneSegment)&&(this.renderer.lineVerticalPlaneSegment=this._lineVerticalPlaneSegment))}_syncPointDistance(){t(this.renderer)||(this.renderer.pointDistanceEnabled=e(this._pointDistanceLine)&&this.visible,e(this._pointDistanceLine)&&(this.renderer.pointDistanceOrigin=this._pointDistanceLine.origin,this.renderer.pointDistanceTarget=this._pointDistanceLine.target))}_disposeRenderer(){e(this.renderer)&&this.view._stage&&(this.view._stage.removeRenderPlugin(this.renderer),this.renderer=null)}}const Fe=s();export{Be as L};
